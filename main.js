(async () => {
	'use strict';
	{
		// 劫持切屏检测事件绑定
		const oldAddEv = EventTarget.prototype.addEventListener;
		EventTarget.prototype.addEventListener = function() {
			const ev = arguments[0] + '';
			if(ev.indexOf('visibilitychange') != -1) {
				console.group('拦截切屏检测事件绑定');
				console.log(arguments);
				console.groupEnd();
				return;
			}
			return oldAddEv.apply(this, arguments);
		};
	}
	{
		// 劫持相机流，使得虚拟摄像机可以被选择
		const oldGetUser = MediaDevices.prototype.getUserMedia;
		MediaDevices.prototype.getUserMedia = function(constraints) {
			console.group('劫持相机流');
			console.log(constraints);
			console.groupEnd();
			return oldGetUser.call(this, { video: true });
		};
	}
	{
		// 劫持屏幕流，使不是显示屏的屏幕流不被考试系统拒绝
		const oldGetDisp = MediaDevices.prototype.getDisplayMedia;
		MediaDevices.prototype.getDisplayMedia = function(constraints) {
			console.group('劫持屏幕流');
			console.log(constraints);
			console.log('Constraints dropped');
			console.groupEnd();
			return oldGetDisp.call(this);
		};

		const oldGetSet = MediaStreamTrack.prototype.getSettings;
		MediaStreamTrack.prototype.getSettings = function() {
			const settings = oldGetSet.apply(this, arguments);
			if('displaySurface' in settings)
				settings.displaySurface = 'monitor';
			console.group('劫持屏幕流设置');
			console.log(settings);
			console.groupEnd();
			return settings;
		};
	}
})();
