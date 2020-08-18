const mask = 'data:image/png;base64,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';

(function (window, document) {
    var render = {};
    (function (render) {
        var requestAnimationFrame = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { return window.setTimeout(function () { callback(Date.now()); }, 1000 / 60); }).bind(window);
        var cancelAnimationFrame = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitcancelAnimationFrame || window.mscancelAnimationFrame || window.clearTimeout).bind(window);
        var _renderList = {};
        var _renderCount = 0;

        function _renderThreadFactory(id, renderer) {
            function sRenderThread(tick) {
                if (_renderList[id].playing) {
                    if (_renderList[id].start == -1) _renderList[id].start = tick;
                    renderer(tick - _renderList[id].start + _renderList[id].shift);
                    if (!_renderList[id]) return;
                    _renderList[id].frameId = requestAnimationFrame(sRenderThread);
                    _renderList[id].lastTime = tick;
                }
            }
            return sRenderThread;
        }
        render.setRender = function setRender(renderThread, shift) {
            var renderNow = _renderCount, renderThread;
            shift = shift || 0;
            _renderCount++;
            _renderList[renderNow] = {
                frameId: 0,
                playing: true,
                thread: renderThread,
                lastTime: 0,
                shift: shift,
                start: -1
            };
            renderThread = _renderThreadFactory(renderNow, renderThread);
            requestAnimationFrame(renderThread);
            return renderNow;
        };
        render.clearRender = function clearRender(id) {
            if (_renderList[id] !== undefined) {
                if (_renderList[id].playing) {
                    cancelAnimationFrame(_renderList[id].frameId);
                }
                _renderList[id] = undefined;
                return true;
            } else {
                return false;
            }
        };
        render._init = function _init() {
            function getFirstRender() {
                function firstThread(tick) {
                    _pageStartTime = tick;
                }
                return firstThread;
            }
            var firstThread = getFirstRender();
            requestAnimationFrame(firstThread);
        };
        render._init();
    }(render));

    var __prefix = (function () {
        var getStyle = window.getComputedStyle, style, match, prefix = '';
        if (getStyle) {
            style = getStyle(document.documentElement, '');
            style = Array.prototype.join.call(style, '');
            match = style.match(/-(?:O|Moz|webkit|ms)-/i);
            if (match) {
                prefix = match[0];
            }
        }
        return prefix;
    })();

    var s = document.querySelectorAll('style')[0],
        is = document.createElement('style');
    is.innerHTML = '.negi{position:absolute;top:50%;left:50%;z-index:99999;display:block;}.negiSpace{position:fixed;top:0;left:0;bottom:0;right:0;' + __prefix + 'transform-origin:50% 50%;transform-origin:50% 50%;' + __prefix + 'transform-style:preserve-3d;transform-style:preserve-3d;' + __prefix + 'perspective:1000px;perspective:1000px;' + __prefix + 'perspective-origin:50% 50%;;perspective-origin:50% 50%;' + __prefix + 'pointer-events:none;pointer-events:none;}';
    if (s === undefined) {
        s = document.querySelectorAll('head')[0];
        s.appendChild(is);
    } else {
        if (s.parentNode.lastChild == s) {
            s.parentNode.appendChild(is);
        } else {
            s.parentNode.insertBefore(is, s.nextSibling);
        }
    }
    var negiSpace;
    var _negiSpace;
    negiSpace = document.createElement('div');
    negiSpace.setAttribute('class', 'negiSpace');
    if (document.querySelector('.negiSpace')) {
        _negiSpace = document.querySelector('.negiSpace');
        document.querySelectorAll('body')[0].insertBefore(negiSpace, document.querySelectorAll('body')[0].nextSilbing);
    } else {
        document.querySelectorAll('body')[0].appendChild(negiSpace);
    }

    var __negisrc = [mask, mask, mask, mask, mask, mask];

    var Negi = (function () {
        function Negi() {
            this.requestAnimationFrame = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || setTimeout).bind(window);
            this.cancelAnimationFrame = (window.cancelAnimationFrame || window.mozcancelAnimationFrame || window.webkitcancelAnimationFrame || window.mscancelAnimationFrame || clearTimeout).bind(window);
            this.__instances = [];
        }

        Negi.prototype.init = function () {
            this.__instances = [];

            var instance, transform;
            for (var zpos = -2000; zpos < 1000; zpos += 20) {
                instance = document.createElement('img');
                instance.setAttribute('class', 'negi');
                instance.setAttribute('src', __negisrc[Math.ceil(Math.random() * 6) - 1]);

                transform = {};
                transform[__prefix + 'transform'] = 'translate3d(' + (Math.random() * 1000 - 500) + 'px, ' + (Math.random() * 1000 - 500) + 'px, ' + zpos + 'px) rotateZ(1deg)';
                transform['transform'] = transform[__prefix + 'transform'];
                transform['z-index'] = (89999 + zpos).toString();

                this.setInlineCSS(instance, transform);

                negiSpace.insertBefore(instance, negiSpace.nextSibling);
                this.__instances.push(instance);
            }
        };

        Negi.prototype.stop = function (id) {
            render.clearRender(id);
            document.querySelector('.negiSpace').innerHTML = '';
        };

        Negi.prototype.start = function () {
            this.init();
            var __oldTime = 0
            var __loop = (function (tick) {
                //alert(tick);
                var __between = tick - __oldTime;
                __oldTime = tick
                var instance, style, transform, translate, _translate, z = 0, rotateZ, r = 1;
                for (var i = 0; i < this.__instances.length; i++) {
                    instance = this.__instances[i];
                    style = this.getInlineCSS(instance);
                    transform = style[__prefix + 'transform'] || style['transform'];
                    translate = transform.match(/translate3d\(([0-9\-.]+)px, ([0-9\-.]+)px, ([0-9\-.]+)px\)/g)[0];
                    _translate = translate.replace('translate3d(', '').replace(/px/g, '').replace(')', '').split(', ');
                    rotateZ = transform.match(/rotateZ\([0-9]+deg\)/g)[0];
                    z = parseInt(_translate[2]) + Math.floor(__between * 2);
                    r = parseInt(rotateZ.replace('rotateZ(', '').replace(')', '')) + Math.floor(__between / 2);

                    if (z > 1000) {
                        z = (z + 2000) % 3000 - 2000;
                        _translate[0] = Math.random() * 1000 - 500;
                        _translate[1] = Math.random() * 1000 - 500;
                    }

                    _translate[2] = z + 'px';

                    transform = transform.replace(translate, 'translate3d(' + _translate.join('px, ') + ')');
                    transform = transform.replace(rotateZ, 'rotateZ(' + r + 'deg)');
                    style = {};
                    style[__prefix + 'transform'] = transform;
                    style['transform'] = style[__prefix + 'transform'];
                    style['z-index'] = (89999 + z).toString();
                    style['opacity'] = z < -1000 ? (z + 2000) / 1000 : z > 600 ? (2600 - z) / 2000 : 1;
                    this.setInlineCSS(instance, style);
                    this.__instances[i] = instance;
                }
            }).bind(this);

            return render.setRender(__loop);
        };

        Negi.prototype.getInlineCSS = function (element) {
            if (element.__style) {
                return element.__style;
            }
            var style = element.getAttribute('style') || '';
            var regexp = /([^:\s]+)\s*:\s*([^;]+)/g;
            var data = {};
            style.replace(regexp, function (origin, key, value) {
                data[key] = value.trim();
            });

            element.__style = data;

            return data;
        };
        Negi.prototype.setInlineCSS = function (element, style) {
            var oldStyle = this.getInlineCSS(element),
                newStyle = [], i;

            for (i in style) {
                if (style.hasOwnProperty(i)) {
                    oldStyle[i] = style[i];
                }
            }
            for (i in oldStyle) {
                if (oldStyle.hasOwnProperty(i)) {
                    newStyle.push(i + ': ' + oldStyle[i]);
                }
            }

            element.setAttribute('style', newStyle.join('; '));
        };

        return Negi;
    })();

    window.Negi = new Negi();
})(window, document);