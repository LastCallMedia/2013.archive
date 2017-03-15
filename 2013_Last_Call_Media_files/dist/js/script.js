(function ($, Drupal) {
  'use strict';

  /*
   * Override the core Drupal.behaviors.dialog.prepareDialogButtons
   * to additionally detect our next and previous buttons.
   */
  Drupal.behaviors.dialog.prepareDialogButtons = function ($dialog) {
    var buttons = [];
    var $buttons = $dialog.find('.form-actions input[type=submit], a.dialog-button');

    $buttons.each(function () {
      // Hidden form buttons need special attention. For browser consistency,
      // the button needs to be "visible" in order to have the enter key fire
      // the form submit event. So instead of a simple "hide" or
      // "display: none", we set its dimensions to zero.
      // See http://mattsnider.com/how-forms-submit-when-pressing-enter/
      var $originalButton = $(this).css({
        width: 0,
        height: 0,
        padding: 0,
        border: 0
      });
      buttons.push({
        text: $originalButton.html() || $originalButton.attr('value'),
        class: $originalButton.attr('class'),
        click: function (e) {
          $originalButton.trigger('mousedown').trigger('click').trigger('mouseup');
          e.preventDefault();
        }
      });
    });
    return buttons;
  };

  $(window).on('dialog:beforecreate', function (e, dialog, $element, settings) {
    // Prevent scroll from being hijacked after a dialog has been created.
    $(window).data('scrollroadTracks').ignore = true;
  });

  // Reenable scroll hijacking once a dialog has been closed.
  $(window).on('dialogclose', function (e, dialog, $element, settings) {
    $(window).data('scrollroadTracks').ignore = false;
  });

})(jQuery, Drupal);

/* eslint-disable no-undefined, no-nested-ternary */
(function ($, iScroll) {
  'use strict';

  var Parallax = {
    self: this,

    // Load
    init: function () {
      var isMobileWebkit = this.checkMobileWebkit();
      if (isMobileWebkit && $(window).width() > 740) {
        this.addIScroll();
        $('#bg-background, #bg-foreground, #bg-tracks, #bg-train').css('position', 'absolute');
      }
      else {
        $('main').addClass('no-iscroll');
      }
      this.setStellarRatio();
      this.setAverageStellarRatio();
      this.initParallax();
      this.overrideStellar();
    },

    // Add iScroll functionality to elements that require it.
    addIScroll: function () {
      // Set explicit heights for regions inside of panes. They need to be
      // taller than their parent .pane
      $('main').once('iscroll').each(function () {
        $('.pane').find('.region').each(
          function () {
            var $this = $(this);
            $this.height($this[0].scrollHeight).css('minHeight', '100%');
          }
        );

        function handleScrollEvent(e) {
          if (!e.target.nodeName.toUpperCase().match(/^(INPUT|TEXTAREA|BUTTON|SELECT|X-WIDGET)/)) {
            e.preventDefault();
          }
        }

        // Each scrollable div needs it's own iScroller...
        new iScroll('pane-work', {vScroll: true, hScroll: false, onBeforeScrollStart: handleScrollEvent, handleClick: false});
        new iScroll('pane-about', {vScroll: true, hScroll: false, onBeforeScrollStart: handleScrollEvent, handleClick: false});
        new iScroll('pane-blog', {vScroll: true, hScroll: false, onBeforeScrollStart: handleScrollEvent, handleClick: false});
        new iScroll('pane-contact', {vScroll: true, hScroll: false, onBeforeScrollStart: handleScrollEvent, handleClick: false});

        // If we start the window scrolled to anywhere but home, everything
        // explodes.  Fix by unsetting the hash and then resetting it after
        // iScroll has initialized.
        var hsh = location.hash;
        location.hash = '';
        Drupal.iScroll = new iScroll('scroll-wrapper', {onBeforeScrollStart: handleScrollEvent, bounce: false});

        if (hsh) {
          setTimeout(function () {
            location.hash = hsh;
            Drupal.iScroll.scrollToElement(hsh, 0);
          }, 50);
        }

      });
    },

    // Make modifications to stellar.
    overrideStellar: function () {
      if (window.Stellar !== 'undefined') {
        var self = this;

        // Update stellar ratios before running refresh.
        var parentRefresh = window.Stellar.prototype.refresh;
        window.Stellar.prototype.refresh = function (options) {
          self.setStellarRatio();
          self.setAverageStellarRatio();
          parentRefresh.call(this, options);
        };

        // Do some train magic if we are using mobile webkit whenever elements
        // are repositioned.
        var parentReposition = window.Stellar.prototype._repositionElements;
        window.Stellar.prototype._repositionElements = function () {
          parentReposition.call(this);
        };

        // Look for data-use-stellar instead of data-stellar-ratio, since
        // that changes on stellar refresh.
        window.Stellar.prototype._findParticles = function () {
          var self = this;

          if ($.isArray(this.particles)) {
            for (var i = this.particles.length - 1; i >= 0; i--) {
              this.particles[i].$element.data('stellar-elementIsActive', false);
            }
          }

          this.particles = [];

          if (!this.options.parallaxElements) { return; }

          this.$element.find('[data-use-stellar]').each(function (i) {
            var $this = $(this);
            var horizontalOffset;
            var verticalOffset;
            var positionLeft;
            var positionTop;
            var marginLeft;
            var marginTop;
            var $offsetParent;
            var offsetLeft;
            var offsetTop;
            var parentOffsetLeft = 0;
            var parentOffsetTop = 0;
            var tempParentOffsetLeft = 0;
            var tempParentOffsetTop = 0;

            // Ensure this element isn't already part of another scrolling element
            if (!$this.data('stellar-elementIsActive')) {
              $this.data('stellar-elementIsActive', this);
            }
            else if ($this.data('stellar-elementIsActive') !== this) {
              return;
            }

            self.options.showElement($this);

            // Save/restore the original top and left CSS values in case we refresh the particles or destroy the instance
            if (!$this.data('stellar-startingLeft')) {
              $this.data('stellar-startingLeft', $this.css('left'));
              $this.data('stellar-startingTop', $this.css('top'));
            }
            else {
              $this.css('left', $this.data('stellar-startingLeft'));
              $this.css('top', $this.data('stellar-startingTop'));
            }

            positionLeft = $this.position().left;
            positionTop = $this.position().top;

            // Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
            marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
            marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

            offsetLeft = $this.offset().left - marginLeft;
            offsetTop = $this.offset().top - marginTop;

            // Calculate the offset parent
            $this.parents().each(function () {
              var $this = $(this);

              if ($this.data('stellar-offset-parent') === true) {
                parentOffsetLeft = tempParentOffsetLeft;
                parentOffsetTop = tempParentOffsetTop;
                $offsetParent = $this;

                return false;
              }
              else {
                tempParentOffsetLeft += $this.position().left;
                tempParentOffsetTop += $this.position().top;
              }
            });

            // Detect the offsets
            horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
            verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

            // Add our object to the particles collection
            self.particles.push({
              $element: $this,
              $offsetParent: $offsetParent,
              isFixed: $this.css('position') === 'fixed',
              horizontalOffset: horizontalOffset,
              verticalOffset: verticalOffset,
              startingPositionLeft: positionLeft,
              startingPositionTop: positionTop,
              startingOffsetLeft: offsetLeft,
              startingOffsetTop: offsetTop,
              parentOffsetLeft: parentOffsetLeft,
              parentOffsetTop: parentOffsetTop,
              stellarRatio: ($this.data('stellar-ratio') !== undefined ? $this.data('stellar-ratio') : 1),
              width: $this.outerWidth(true),
              height: $this.outerHeight(true),
              isHidden: false
            });
          });
        };
      }
    },

    initParallax: function () {
      if (this.checkMobileWebkit()) {
        $('main').stellar({
          scrollProperty: 'transform',
          positionProperty: 'transform',
          responsive: false,
          verticalScrolling: false,
          hideDistantElements: false
        });
      }
      else {
        $.stellar({
          scrollProperty: 'scroll',
          positionProperty: 'transform',
          responsive: true,
          verticalScrolling: false,
          hideDistantElements: false
        });
      }
    },

    setStellarRatio: function () {
      $('[data-use-stellar]').not('[data-avg-ratio-updates]').each(function () {
        var elWidth = $(this).width();
        var fullWidth = $('#bg-container').width();
        var windowWidth = $(window).width();
        var ratio = ($(this).data('stellar-ratio-fixed') !== undefined) ? $(this).data('stellar-ratio-fixed') : ((elWidth - windowWidth) / (fullWidth - windowWidth));
        $(this).data('stellar-ratio', ratio);

        // TODO: remove this.
        $(this).attr('data-stellar-ratio', ratio);
      });
    },

    // Set the stellar ratio for elements that should use the average of all
    // of the other stellar enabled elements.
    setAverageStellarRatio: function () {
      var $stellars = $('[data-use-stellar]').not('[data-avg-ratio-updates], [data-stellar-ratio-fixed]');
      var stellarCount = $stellars.length;
      var ratio = 0;
      var width = 0;

      $stellars.each(function () {
        var $this = $(this);
        ratio += $this.data('stellar-ratio');
        width += $this.width();
      });

      $('[data-use-stellar][data-avg-ratio-updates]')
        .data('stellar-ratio', (ratio / stellarCount))
        .width(width / stellarCount);
    },

    checkMobileWebkit: function () {
      var ua = navigator.userAgent;
      var isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);
      return isMobileWebkit;
    }
  };

  Drupal.behaviors.lastCallParallax = {
    attach: function (context) {
      $('main').once('parallax').each(function () {
        Parallax.init();
      });
    }
  };
})(jQuery, window.iScroll);

(function ($) {
  'use strict';

  $.fn.scrollControl = function (settings) {
    var defaults = {
      paneSelector: '.region'
    };

    // Scroll Controller.
    var sc = {
      options: $.extend({}, defaults, settings),
      panes: [],
      windowPos: {},
      preventFocusSet: false,
      processed: false,
      focused: '',
      $focusedElement: '',

      init: function () {
        this.getPanes(this.options.paneSelector);
        $(window).data('scroll-control', this);
        this.refresh();
      },

      getPanes: function (selector) {
        var self = this;
        $(selector).each(function () {
          self.panes.push(this);
          $(this).attr('data-sc-pane', true);
        });
      },

      getOffsets: function (el) {
        var $el = $(el);
        var elWidth = $el.width();
        var left = $el.offset().left;
        var center = Math.round(left + (elWidth / 2));
        var right = left + elWidth;
        var top = $el.offset().top;
        var bottom = top + $el.height();

        $el.data('offset-left', left).data('offset-center', center).data('offset-right', right).data('offset-top', top).data('offset-bottom', bottom);
        return el;
      },

      refresh: function () {
        var self = this;

        // These will be used for determining focus later.
        var oldWindowCenter = this.windowPos.center;
        var oldWindowMiddle = this.windowPos.middle;
        var oldWindowTop = this.windowPos.top;
        var newPosition = this.getWindowPosition();
        var newWindowCenter = newPosition.center;
        var newWindowMiddle = newPosition.middle;
        var newWindowTop = newPosition.top;
        var count = 0;

        $(this.panes).each(function () {
          var $el = $(self.getOffsets(this));
          var elCenter = $el.data('offset-center');
          var elTop = $el.data('offset-top');
          var elBottom = $el.data('offset-bottom');

          if ($(window).data('scroll-control-desktop') === true) {
            if (((oldWindowCenter < elCenter && (newWindowCenter) >= elCenter)
              || (oldWindowCenter > elCenter && (newWindowCenter) <= elCenter)
              )) {
              if (!self.preventFocusSet && self.processed) {
                self._windowTrigger('scrollcontrol.focusSet', [this]);
              }
            }
          }

          else {
            if (((oldWindowMiddle >= elBottom) && (newWindowMiddle <= elBottom))
              || ((oldWindowMiddle <= elTop) && (newWindowMiddle >= elTop))) {
              self._windowTrigger('scrollcontrol.focusSet', [this]);
            }
            // When the user scrolls to the top of the page, use the first pane.
            else if (newWindowTop <= 0) {
              self._windowTrigger('scrollcontrol.focusSet', [self.panes[0]]);
            }
            // If the second pane scrolls into view then switch to it.
            // This condition is only required when the first pane makes up
            // less than half of the screen height.
            else if ((oldWindowTop <= elBottom) && (newWindowTop >= elBottom) && count === 0) {
              self._windowTrigger('scrollcontrol.focusSet', [self.panes[1]]);
            }
          }
          count++;
          if (!self.processed) {
            self.processed = true;
          }
        });
      },

      // Update window dimensions.
      getWindowDimensions: function () {
        var $window = $(window);
        $.extend(this.windowPos, {
          width: $window.width(),
          height: $window.height()
        });
      },

      // Update window positions so we can avoid.
      getWindowPosition: function () {
        if (!this.windowPos.height) {
          this.getWindowDimensions();
        }

        var $window = $(window);
        var wWidth = this.windowPos.width;
        var scrollLeft = $window.scrollLeft();
        var top = $window.scrollTop();
        var wHeight = this.windowPos.height;
        var positions = {
          left: scrollLeft,
          right: scrollLeft + wWidth,
          center: Math.round(scrollLeft + (wWidth / 2)),
          top: top,
          bottom: top + wHeight,
          middle: Math.round(top + (wHeight / 2))
        };
        $.extend(this.windowPos, positions);
        return positions;
      },

      // Check whether or not a div is visible on the screen.
      isScrolledIntoView: function (elem) {
        var $elem = $(elem);
        var elemTop = $elem.data('offset-top');
        var elemBottom = elemTop + $elem.height();
        var elemLeft = $elem.data('offset-left');
        var elemRight = $elem.data('offset-right');

        return !((this.windowPos.left >= elemLeft) && (this.windowPos.left >= elemRight))
          && !((this.windowPos.right <= elemLeft) && (this.windowPos.right <= elemRight))
          && !((this.windowPos.top >= elemTop) && (this.windowPos.top >= elemBottom))
          && !((this.windowPos.bottom <= elemTop) && (this.windowPos.bottom <= elemBottom));
      },

      updateMQStatus: function () {
        if (window.matchMedia('all and (min-width: 721px)').matches) {
          $(window).data('scroll-control-desktop', true);
        }
        else {
          $(window).data('scroll-control-desktop', false);
        }
      },

      // Only trigger events if we aren't preventing it.
      _windowTrigger: function (trigger, thing) {
        if (arguments.length === 1) {
          $(window).trigger(trigger);
        }
        else if (arguments.length === 2) {
          $(window).trigger(trigger, thing);
        }
      }
    };

    sc.init();

    $(window).on('scroll', function (e) {
      sc.refresh();
    });

    $(window).on('resize', function () {
      sc.getWindowDimensions();
    });

    $(window).on('scrollcontrol.focusSet', function (e, elem) {
      var dataElement = $(elem).data('sc-element');

      // Update scrollcontrol properties.
      sc.focused = dataElement;
      sc.$focusedElement = $(elem);
    });

    $(window).on('resize.scrollControl', function () {
      sc.updateMQStatus();
      $('.pane').each(function () {
        var $this = $(this);
        $this.data('centerscroll', Math.round($this.offset().left + ($this.width() / 2)));
      });
    }).trigger('resize.scrollControl');
  };
}(jQuery));

(function ($) {
  'use strict';

  // Get it?? It's like scrolling railroad tracks...
  // not that funny.
  $.fn.scrollRoadTracks = function () {
    var sc = {
      $scrollLocker: false,
      preventScrollThrough: false,
      ignore: false,
      lastDelta: 0,
      lockReleased: false,
      scrollControl: $(window).data('scroll-control'),

      // Setter method for lastDelta property.
      setLastDelta: function (delta, deltaFactor) {
        this.lastDelta = delta;
        return this.lastDelta;
      },

      // If focus is set on a region, then force the scroll event to happen
      // in the locked region, otherwise hijack the site's horizontal scrolling.
      controlledScroll: function (scrollDistance) {
        this.setLastDelta(scrollDistance);

        if (this.$scrollLocker !== false) {
          if (!this.scrollLockerAtEnd(scrollDistance)) {
            this.lockReleased = false;
            var topOffset = this.$scrollLocker.scrollTop();
            // slow the locked scroll down a bit so it's more clear what
            // is going on.
            this.$scrollLocker.scrollTop(Math.round(topOffset - (scrollDistance / 4)));
          }
          else if (this.lockReleased) {
            this.$scrollLocker = false;
          }
          // Prevent scrolling straight through pane when we get to the end.
          // This forces the user to scroll again once they get to the bottom
          // of the pane to move the page forward.
          else {
            this.preventScrollThrough = true;
          }
        }
        else {
          $(window).scrollLeft($(window).scrollLeft() - scrollDistance);
        }
      },

      // Check if we've scrolled to the top or bottom of
      // the scrollLocker element.
      scrollLockerAtEnd: function (deltaControl, scrollOffset) {
        if (!this.$scrollLocker) {
          return;
        }

        var scrollRegionTop = this.$scrollLocker.scrollTop();
        var innerHeight = this.$scrollLocker.innerHeight();
        var scrollHeight = this.$scrollLocker[0].scrollHeight;

        if (innerHeight >= scrollHeight) { return true;}

        if (this.movingForward(deltaControl)) {
          // There's an off-by-one error possibly caused by `scrollHeight`
          // in Chrome but to find out exactly what's going on would require
          // a trip down the rabbit hole.  So, we just adjust things by 1 for
          // Chrome and let it be.
          return !(scrollRegionTop + innerHeight < scrollHeight - 1) &&
            // Never notify that we're at the end of the last pane:
            !this.$scrollLocker.hasClass('region-contact');
        }
        else {
          return scrollRegionTop <= 0;
        }
      },
      releaseLock: function () {
        this.preventScrollThrough = false;
        this.lockReleased = true;
      },

      // Check if we should limit the delta to prevent overscrolling of the
      // when focusing on panes.
      getScrollDistance: function (deltaFactor, deltax, deltay) {
        var scrollDelta = (Math.abs(deltax) > Math.abs(deltay)) ? -deltax : deltay;
        return deltaFactor * scrollDelta;
      },

      // Check whether the deltas indicate that the scroll is moving forward.
      movingForward: function (delta) {
        return delta <= 0;
      }
    };

    // Add scrollroadtracks object to the window.
    $(window).data('scrollroadTracks', sc);

    // Update the scrollLocker when a new region gets focused.
    $(window).on('scrollcontrol.focusSet', function (e, element) {
      sc.$scrollLocker = $(element);
    });

    var lastScrollDelta = 0;
    $(window).on('mousewheel', function (e, delta, deltax, deltay) {
      // Only hijack the scroll when the window
      // is greater than our mobile layout width.
      // This data attr is set by scrollControl.
      if ($(this).data('scroll-control-desktop') !== true || sc.ignore === true) {return;}

      e.preventDefault();
      var scrollDistance = sc.getScrollDistance(e.deltaFactor, deltax, deltay);

      var $window = $(window);
      var windowCenter = Math.round($window.scrollLeft() + ($window.width() / 2));
      $('.pane').filter(function () {
        return scrollDistance < 0 ?
          $(this).data('centerscroll') > windowCenter :
          $(this).data('centerscroll') < windowCenter;
      }).each(function () {
        if (scrollDistance < 0) {
          if (windowCenter - scrollDistance > $(this).data('centerscroll') && !sc.$scrollLocker) {
            scrollDistance = windowCenter - $(this).data('centerscroll');
          }
        }
        else {
          if (windowCenter - scrollDistance < $(this).data('centerscroll')) {
            scrollDistance = windowCenter - $(this).data('centerscroll');
          }
        }
      });

      if (sc.preventScrollThrough === true) {
        if ((Math.abs(scrollDistance) > Math.abs(lastScrollDelta))) {
          sc.releaseLock();
        }
      }

      if ((sc.preventScrollThrough !== true)) {
        sc.controlledScroll(scrollDistance);
      }
      lastScrollDelta = scrollDistance;
    });
    return this;
  };

})(jQuery);

(function ($) {
  'use strict';
  function Animation(conf) {
    this.$el = conf.$el;
    this.baseClass = conf.$el.data('animation-class');
    this.finish = conf.finish;
    this.start = conf.start;
    this.stepClass = '';
    this.steps = conf.$el.data('animation-steps');
  }

  Animation.prototype.setSprite = function () {
    var start = this.start;
    var finish = this.finish;
    var position = ($(document).scrollLeft() / Animation.timeline) * 100;

    if ((start <= position) && (position <= finish)) {
      var offset = position - start;
      var duration = finish - start;
      var step = Math.round((offset / duration) * this.steps);

      // Make sure we start on frame 1.
      step += (step < 1) ? 1 : 0;

      this.setAnimationStep(step);
    }
    else {
      this.setAnimationStep(0);
    }
  };

  Animation.prototype.setAnimationStep = function (step) {
    var stepInt = parseInt(step, 10);
    var stepOrder = stepInt > 9 ? stepInt : '0' + stepInt;

    this.$el.removeClass(this.stepClass);
    this.stepClass = this.baseClass + stepOrder;
    this.$el.addClass(this.stepClass);

    var hiding = (stepOrder < 1 || this.steps < stepOrder);
    this.$el.toggleClass('animation-hidden', hiding);
  };

  Drupal.behaviors.lastcallAnimations = {
    attach: function () {
      // `start` and `finish` are percentages.
      var animations = [
        new Animation({
          $el: $('#allaboard-animation'),
          start: 0,
          finish: 9.5
        }),
        new Animation({
          $el: $('#bird-animation'),
          start: 2.6,
          finish: 25
        }),
        new Animation({
          $el: $('#dog-animation'),
          start: 18,
          finish: 28.7
        }),
        new Animation({
          $el: $('#surfing-animation'),
          start: 31.43,
          finish: 69.98
        }),
        new Animation({
          $el: $('#jump-animation'),
          start: 38.09,
          finish: 60.5
        }),
        new Animation({
          $el: $('#wave-animation'),
          start: 68.6,
          finish: 91.8
        }),
        new Animation({
          $el: $('#robot-animation'),
          start: 90.29,
          finish: 100
        })
      ];

      var redraw = function (e) {
        Animation.timeline = $(document).width() - $(window).width();
        animations.map(function (item) {
          item.setSprite();
        });
      };

      // Make sure animations initially appear correctly.
      redraw();

      $(document).on('scroll', redraw);
    }
  };
})(jQuery);

(function ($, Modernizr) {
  'use strict';

  Drupal.behaviors.lastcallFrontpage = {
    attach: function (context, settings) {
      // Only do all of this stuff on the homepage.
      if (!$('body.path-frontpage').length) {
        return;
      }

      // Add scrollcontrol data attributes to each region.
      var id;
      $('.pane').each(function () {
        id = $(this).attr('id');
        if (id && (id.length > 0)) {
          $(this).children('.region:first-child').data('sc-element', id);
        }
      });

      $('html').once('scroll-control').each(function () {
        $(window).scrollControl();
        $(window).scrollRoadTracks();
      });

      // Create the active indicator and add it to the page header:
      if (!$('#active-indicator').length) {
        var $idcr = $('<span id="active-indicator"></span>');
        $('#page-header').append($idcr);
      }

      // Perform our operations that take place when scrollcontrol focus changes.
      $(window, context).on('scrollcontrol.focusSet', function (e, element) {
        var $idcr = $('#active-indicator');
        var linkId = $(element).parent().attr('id');
        var $listItem = $('header ul.desktop-menu li a[href="#' + linkId + '"]').parent();
        var title = $('header ul.mobile-menu li a[href="#' + linkId + '"]').parent().text();
        // Add html class on focus change.
        if (title === 'Home') {
          title = '';
        }
        // Set the page title with the text from the link.
        $('#title').text(title);

        // Move the active indicator on scrollcontrol focus change.
        $idcr.data('active-item', $listItem);
        repositionIndicator.apply($idcr, [$listItem, true]);
      });

      // Move the indicator on hover in:
      $('#page-header .menu a', context).hover(function () {
        var $idcr = $('#active-indicator');
        var parent = $(this).parent();
        repositionIndicator.apply($idcr, [parent, true]);
        // Move the indicator back on hover out:
      }, function () {
        var $idcr = $('#active-indicator');
        repositionIndicator.apply($idcr, [$idcr.data('active-item'), true]);
      });

      $('a.scroll', context).on('click', function (e) {
        e.preventDefault();

        var $this = $(this);
        var $scrollLocker = $(window).data('scrollroadTracks').$scrollLocker;
        var currentPaneId = ($scrollLocker) ? $scrollLocker.parent().attr('id') : 'none';
        var $targetPane = $($this.attr('href'));

        // Don't move if the clicked link is for the pane the user
        // is currently viewing.
        if (currentPaneId === $targetPane.attr('id')) {
          return;
        }

        var direction;
        var opposite;
        if ($targetPane.offset().left < $(window).scrollLeft()) {
          direction = 'forward';
          opposite = 'behind';
        }
        else {
          direction = 'behind';
          opposite = 'forward';
        }

        $('#bg-train').addClass('train-dislodged-' + direction).removeClass('train-dislodged-' + opposite);

        // iScroll object is defined in parallax.js for mobile webkit browsers.
        if (Drupal.iScroll) {
          Drupal.iScroll.scrollToElement($this.attr('href'), 2500);
        }
        else {
          var mqAxis = window.matchMedia('all and (min-width: 721px)').matches ? 'x' : 'y';
          var sc = $(window).data('scroll-control');
          var scrollSpeed = 2500;
          var scrollOptions = {
            axis: mqAxis,
            onAfter: function ($el) {
              var scr = $(window).data('scrollroadTracks');
              scr.$scrollLocker = $($el.find('.region'));
              sc.preventFocusSet = false;
              $('#bg-train')
                .removeClass('train-dislodged-' + direction)
                .addClass('train-dislodged-' + opposite)
                .removeClass('train-dislodged-' + direction);
            }
          };
          if (mqAxis === 'y') {
            scrollSpeed = 1000;
          }

          sc._windowTrigger('scrollcontrol.focusSet', $($($this.attr('href')).find('.region')));
          sc.preventFocusSet = true;

          $(window).scrollTo($this.attr('href'), scrollSpeed, scrollOptions);
        }
      });

      // Readjust on window resize.
      // We unbind first to make sure we don't double bind:
      $(window).off('resize.lastcall.activeIndicator').on('resize.lastcall.activeIndicator', function (e) {
        $('#active-indicator').each(function () {
          var item = $(this).data('active-item');
          if (item) {
            repositionIndicator.apply(this, [item, false]);
          }
        });
      });

      // Primary function for moving the indicator:
      function repositionIndicator(newItem, animate) {
        var $link = $(newItem).find('a').parent();
        var $linkChild = $(newItem).find('a');
        if ($link.length) {
          var css = {};
          // Shrink the indicator when it is behind the home bubble
          // so that it doesn't show.
          if ($linkChild.attr('href') !== '#pane-home') {
            css.width = $link.width();
            css.left = $link.position().left + parseInt($link.css('padding-left'), 10);
            $('.scroll.scroll-active').removeClass('scroll-active');
            $linkChild.addClass('scroll-active');
          }
          else {
            $('.scroll.scroll-active').removeClass('scroll-active');
            css.width = 35;
            css.left = $link.position().left + parseInt($link.css('padding-left'), 10) + 50;
          }

          $(this).stop(true, false);
          if (animate) {
            $(this).animate(css);
          }
          else {
            $(this).css(css);
          }
        }
      }
    }
  };

  Drupal.behaviors.slotLinkStyle = {
    attach: function (context, settings) {
      // Allow the "see more" links under the blog thumbnails
      // and the "view site" links within portfolio popups
      // and the pager arrows in the portfolio to be styled
      // in a "slot machine" type of way.
      $('.more-link', context)
        .wrap($('<div>', {class: 'slot-links-container'}))
        .add('.field--name-field-site-url', context)
        .each(function () {
          var $a = $(this).find('a');
          var text = $a.text();
          $a.text(null);
          $a.append($('<span>', {class: 'slot-link--normal', text: text}));
          $a.append($('<span>', {class: 'slot-link--hover', text: text}));
        });
    }
  };

  Drupal.behaviors.fancySelects = {
    attach: function (context) {
      var $dropdown = $('#ajax-contact-form-wrapper select', context);
      $dropdown.find('option:first-child').addClass('label');
      $dropdown.easyDropDown();
    }
  };

  Drupal.behaviors.pagerManipulate = {
    attach: function (context) {
      // If there is a previous page, hide the "last" arrow.
      if ($('.pager__item--previous a[href]', context).length) {
        $('.pager__item--last', context).css('display', 'none');
      }
      // If there is a next page, hide the 'first' arrow.
      if ($('.pager__item--next a', context).length) {
        $('.pager__item--first', context).css('display', 'none');
      }
    }
  };



  Drupal.behaviors.viewsExposedFormSelectAsTab = {
    attach: function (context, settings) {
      $('.select-as-tabs', context).hide().each(function () {
        var select_list = $(this);
        var ul = $('<ul />').addClass('views-exposed-filter-tabs-processed');
        select_list.find('option').each(function (i) {
          var option = $(this);
          var li = $('<li />');
          var active = $(this).attr('selected') != null ? ' active' : '';
          li.addClass('tab tab-' + i + active).html(option.html()).click(function () {
            select_list.val(option.val()); // use val() for Safari compatibility.
            select_list.closest('form').find('input[type=submit]').click();
          });
          ul.append(li);
        }).parents('.form--inline').append(ul);
      });
    }
  };

  Drupal.behaviors.portfolioSlideshow = {
    attach: function (context, settings) {
      var $screenshots = $('.node--view-mode-full .field--name-field-site-screenshots', context);
      var $coverImage = $('.node--view-mode-full .field--name-field-cover-image', context);
      if ($screenshots.length || $coverImage.length) {
        $screenshots.on('cycle-bootstrap', function (e, opts, API) {
          API.customGetImageSrc = function (slideOpts, opts, slideEl) {
            return $(slideEl).find('img').attr('src');
          };
        });
        // Stick the cover image in at the beginning:
        $screenshots.prepend($coverImage);
        $screenshots.append('<div class="cycle-pager"></div>');
        $screenshots.cycle({
          log: false,
          fx: Modernizr.touch ? 'scrollHorz' : 'fade',
          speed: 600,
          slides: '>.field__item',
          pagerTemplate: '<img src="{{API.customGetImageSrc}}" width=135 height=100>',
          delay: 1000,
          swipe: true,
          maxZ: 9,
          pagerEvent: 'mouseover'
        });
        $screenshots.after('<div class="swipe-indicator"><i class="icon-left"></i>Swipe<i class="icon-right"></i></div>');
      }

    }
  };

  Drupal.behaviors.responsiveMenu = {
    attach: function (context, settings) {

      var already_focused = false;

      $('#navigation', context)
        .find('.menu-title')
        .on('click', function (e) {
          e.preventDefault();
          if (already_focused) {
            $(this).toggleClass('show-menu');
          }
          else {
            $(this).addClass('show-menu');
            already_focused = true;
          }
        })
        .on('focus', function (e) {
          if (!already_focused) {
            $(this).addClass('show-menu');
            already_focused = false;
          }
        })
      .end()
      .find('.mobile-menu a')
        .on('click', function () {
          $('#navigation', context).find('.menu-title').removeClass('show-menu');
        })
        .on('focus', function () {
          $('#navigation', context).find('.menu-title').addClass('show-menu');
        });

      $(document).on('click focus keyup', function (e) {
        if (!$(e.target).parents('#navigation').length) {
          $('#navigation', context).find('.menu-title').removeClass('show-menu');
          already_focused = false;
        }
      });
    }
  };

  Drupal.behaviors.lcmOverridePrototypes = {
    attach: function () {
      // Views scrolltop functionality doesn't work very well for our layout.
      Drupal.AjaxCommands.prototype.viewsScrollTop = function (ajax, response) {
         // do nothing.
      };
    }
  };

  Drupal.behaviors.chromeTelLinks = {
    attach: function (context) {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
        $('span.tel', context).telEnhance();
      }
    }
  };

  Drupal.behaviors.stickyPager = {
    attach: function (context) {
      // Determine if a fixed pager should be implemented or not.
      function handleFixedPager() {
        var $pager = sc.$focusedElement.find('div.item-list:visible');
        var $viewContent = $pager.siblings('.view-content');

        // If the pager goes above the fixed header, then add a class to it.
        if ($pager.length > 0) {
          var viewBottom = $(window).scrollTop() - ($viewContent.offset().top + $viewContent.height()) + headerHeight;
          var scrollBelow = viewBottom > 0;
          var pagerTop = $(window).scrollTop() - $pager.offset().top + headerHeight;
          var pagerAbove = pagerTop > 0;
          var $pagerList = $pager.find('ul');

          // Add the fixed header if it goes above the fixe header.
          if ((pagerAbove) && (!scrollBelow) && ($pager.data('fixed') !== true)) {
            $pager.addClass('fixed-pager');
            $pager.data('fixed', true);
          }

          // Remove fixed pager goes if it goes below the fixed header
          else if (!pagerAbove && ($pager.data('fixed') === true)) {
            unfixPager($pager, $pagerList);
          }

          // Remove fixed pager class if the view is above the fixed header.
          else if ((scrollBelow) && ($pager.data('fixed') === true)) {
            unfixPager($pager, $pagerList);
          }
        }
      }

      // Remove fixed pager functionality.
      function unfixPager($pager, $pagerList) {
        $pager.data('fixed', false);
        $pagerList.animate({marginTop: '-40'}, 300, function () {
          $pagerList.css('margin-top', '');
          $pager.removeClass('fixed-pager');
        });
      }

      var sc = $(window).data('scroll-control');
      if (!sc) {
        // We can't continue...
        return;
      }
      var headerHeight = $('#page-header').height();

      // Check if fixed pager should be applied on attach
      if (sc.focused !== '') {
        handleFixedPager();
      }

      $(window).on('scroll', function (e) {
        if (!$(window).data('scroll-control-desktop')) {
          handleFixedPager();
        }
      });
    }
  };

  Drupal.behaviors.joinUsLink = {
    attach: function (context, settings) {
      $('#block-views-block-employees-staff-block .views-row:last', context).css('cursor', 'pointer').click(function () {
        $.cookie('backPath', 'about');
        window.location.href = 'careers';
      });
    }
  };

  $.fn.telEnhance = function (settings) {
    $(this).each(function () {
      var $el = $(this);
      if ($el.find('a[href^="tel:"]').length === 0) {
        var number = $el.text().replace(/[()-]/g, '');
        var $link = $('<a>' + $el.html() + '</a>')
            .attr('href', 'tel://' + number);
        $el.html($link);
      }
    });
  };
  Drupal.behaviors.lcmAnimations = {
    attach: function (context, settings) {
      // Since the robot animation gets in the way of the contact form send
      // focus to the message textarea when it gets clicked on.
      $('#robot-animation').on('click', function () {
        $('#contact-message-feedback-form').find('textarea[name="message"]').focus();
      });
    }
  };
})(jQuery, Modernizr);

//# sourceMappingURL=../maps/script.js.map
