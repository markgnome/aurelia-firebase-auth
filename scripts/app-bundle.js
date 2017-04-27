define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(userLoggedIn, authToken, user) {
            if (userLoggedIn === void 0) { userLoggedIn = false; }
            if (authToken === void 0) { authToken = null; }
            if (user === void 0) { user = null; }
            var _this = this;
            this.userLoggedIn = userLoggedIn;
            this.authToken = authToken;
            this.user = user;
            this.username = '';
            this.password = '';
            firebase.auth().onAuthStateChanged(function (user) {
                _this.userLoggedIn = user ? true : false;
                _this.user = user;
            });
        }
        App.prototype.login = function (type) {
            var _this = this;
            var provider;
            if (type === 'google') {
                provider = new firebase.auth.GoogleAuthProvider();
            }
            else if (type === 'facebook') {
                provider = new firebase.auth.FacebookAuthProvider();
            }
            else if (type === 'twitter') {
                provider = new firebase.auth.TwitterAuthProvider();
            }
            if (type === 'username_password') {
                firebase.auth().signInWithEmailAndPassword(this.username, this.password).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    }
                    else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
            }
            firebase.auth().signInWithPopup(provider).then(function (result) {
                _this.authToken = result.credential.accessToken;
                _this.user = result.user;
                _this.userLoggedIn = true;
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
        };
        App.prototype.logout = function () {
            var _this = this;
            firebase.auth().signOut().then(function () {
                _this.userLoggedIn = false;
            }).catch(function (error) {
                throw new Error(error);
            });
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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eEIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxvQkFBTSxHQUFOO1lBQUEsaUJBT0M7WUFMRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUMzQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO2dCQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBR0wsVUFBQztJQUFELENBMUVBLEFBMEVDLElBQUE7SUExRVksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgZmlyZWJhc2U7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHVzZXJMb2dnZWRJbiA9IGZhbHNlLFxuICAgICAgICBwcml2YXRlIGF1dGhUb2tlbiA9IG51bGwsXG4gICAgICAgIHByaXZhdGUgdXNlciA9IG51bGxcbiAgICApe1xuICAgICAgICAvLyBUaGlzIG1vc3RseSBnZXRzIGNhbGxlZCBvbiBzdWJzZXF1ZW50IHBhZ2UgbG9hZHMgdG8gZGV0ZXJtaW5lXG4gICAgICAgIC8vIHdoYXQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSB1c2VyIGlzIHdpdGggXCJ1c2VyXCIgYmVpbmcgYW4gb2JqZWN0XG4gICAgICAgIC8vIHJldHVybiBieSBGaXJlYmFzZSB3aXRoIGNyZWRlbnRpYWxzIGFuZCBvdGhlciBpbmZvIGluc2lkZSBvZiBpdFxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyTG9nZ2VkSW4gPSB1c2VyID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gIGxvZ2luKHR5cGUpIHtcbiAgICAgICAgbGV0IHByb3ZpZGVyO1xuXG4gICAgICAgIC8vIERldGVybWluZSB3aGljaCBwcm92aWRlciB0byB1c2UgZGVwZW5kaW5nIG9uIHByb3ZpZGVkIHR5cGVcbiAgICAgICAgLy8gd2hpY2ggaXMgcGFzc2VkIHRocm91Z2ggZnJvbSBhcHAuaHRtbFxuICAgICAgICBpZiAodHlwZSA9PT0gJ2dvb2dsZScpIHtcbiAgICAgICAgICAgIHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2ZhY2Vib29rJykge1xuICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0d2l0dGVyJykge1xuICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICd1c2VybmFtZV9wYXNzd29yZCcpIHtcbiAgICAgICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCh0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXG4gICAgICAgICAgICAgICAgdmFyIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgLy8gW1NUQVJUX0VYQ0xVREVdXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yQ29kZSA9PT0gJ2F1dGgvd3JvbmctcGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdXcm9uZyBwYXNzd29yZC4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBbRU5EX0VYQ0xVREVdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAvLyBDYWxsIHRoZSBGaXJlYmFzZSBzaWduaW4gbWV0aG9kIGZvciBvdXIgcHJvdmlkZXJcbiAgICAgICAgLy8gdGhlbiB0YWtlIHRoZSBzdWNjZXNzZnVsIG9yIGZhaWxlZCByZXN1bHQgYW5kIGRlYWwgd2l0aFxuICAgICAgICAvLyBpdCBhY2NvcmRpbmdseS5cbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcikudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vIFRoZSB0b2tlbiBmb3IgdGhpcyBzZXNzaW9uXG4gICAgICAgICAgICB0aGlzLmF1dGhUb2tlbiA9IHJlc3VsdC5jcmVkZW50aWFsLmFjY2Vzc1Rva2VuO1xuXG4gICAgICAgICAgICAvLyBUaGUgdXNlciBvYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCB1c2VyXG4gICAgICAgICAgICB0aGlzLnVzZXIgPSByZXN1bHQudXNlcjtcblxuICAgICAgICAgICAgLy8gU2V0IGEgY2xhc3MgdmFyaWFibGUgdG8gdHJ1ZSB0byBzdGF0ZSB3ZSBhcmUgbG9nZ2VkIGluXG4gICAgICAgICAgICB0aGlzLnVzZXJMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGxldCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICBsZXQgZW1haWwgPSBlcnJvci5lbWFpbDtcbiAgICAgICAgICAgIGxldCBjcmVkZW50aWFsID0gZXJyb3IuY3JlZGVudGlhbDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvLyBTZWxmLWV4cGxhbmF0b3J5IHNpZ25vdXQgY29kZVxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVzZXJuYW1lID0gJyc7XG4gICAgcGFzc3dvcmQgPSAnJztcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><a href=\"javascript:void(0);\" click.delegate=\"login('google')\" if.bind=\"!userLoggedIn\">Login via Google</a> <a href=\"javascript:void(0);\" click.delegate=\"login('twiter')\" if.bind=\"!userLoggedIn\">Login via Twitter</a> <a href=\"javascript:void(0);\" click.delegate=\"login('facebook')\" if.bind=\"!userLoggedIn\">Login via Facebook</a> <a href=\"javascript:void(0);\" click.delegate=\"logout()\" if.bind=\"userLoggedIn\">Logout</a><br><input id=\"user\" type=\"text\" value.bind=\"username\"><br><input id=\"pass\" type=\"password\" value.bind=\"password\"><br><a href=\"javascript:void(0);\" click.delegate=\"login('username_password')\" if.bind=\"!userLoggedIn\">Login</a><div class=\"profile\" show.bind=\"userLoggedIn && user\"><h1>${user.displayName}</h1><h2>${user.email}</h2><img src.bind=\"user.photoURL\" if.bind=\"user.photoURL\"></div></template>"; });
//# sourceMappingURL=app-bundle.js.map