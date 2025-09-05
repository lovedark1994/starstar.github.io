const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Behaviors.Sin,
		C3.Plugins.Touch,
		C3.Plugins.Sprite,
		C3.Plugins.Audio,
		C3.Behaviors.Tween,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Acts.SetScale,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Text.Cnds.IsVisible,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Audio.Cnds.OnEnded,
		C3.Behaviors.Tween.Cnds.OnTweensFinished
	];
};
self.C3_JsPropNameTable = [
	{編號: 0},
	{正弦: 0},
	{文字: 0},
	{Touch: 0},
	{Sprite: 0},
	{只是: 0},
	{音频: 0},
	{答案三: 0},
	{答案二: 0},
	{答案一: 0},
	{补间动画: 0},
	{Sprite2: 0},
	{美好: 0}
];

self.InstanceType = {
	文字: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	只是: class extends self.ITextInstance {},
	音频: class extends self.IInstance {},
	答案三: class extends self.ITextInstance {},
	答案二: class extends self.ITextInstance {},
	答案一: class extends self.ITextInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	美好: class extends self.ITextInstance {}
}