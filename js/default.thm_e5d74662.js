window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/Components/ChatSendButtonSkin.exml'] = window.ChatSendButtonSkin = (function (_super) {
	__extends(ChatSendButtonSkin, _super);
	function ChatSendButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 88;
		this.width = 160;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x87dbae)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Rect1","fillColor",0x87dbae)
				])
		];
	}
	var _proto = ChatSendButtonSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x1cbf69;
		t.height = 88;
		t.width = 160;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 38;
		t.verticalCenter = 0;
		return t;
	};
	return ChatSendButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Components/ChatTextInputSkin.exml'] = window.ChatTextInputSkin = (function (_super) {
	__extends(ChatTextInputSkin, _super);
	function ChatTextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.height = 88;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = ChatTextInputSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.percentHeight = 80;
		t.horizontalCenter = "0";
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.percentWidth = 90;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.strokeColor = 0xf72222;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 90;
		return t;
	};
	return ChatTextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Components/LoadingComponentSkin.exml'] = window.LoadingComponentSkin = (function (_super) {
	__extends(LoadingComponentSkin, _super);
	function LoadingComponentSkin() {
		_super.call(this);
		this.skinParts = ["loadingTween","labelDisplay","spadeImage","circleImage"];
		
		this.height = 1334;
		this.width = 750;
		this.loadingTween_i();
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.spadeImage_i(),this.circleImage_i()];
		
		eui.Binding.$bindProperties(this, ["spadeImage"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, ["circleImage"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [180],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [360],[],this._Object4,"rotation");
	}
	var _proto = LoadingComponentSkin.prototype;

	_proto.loadingTween_i = function () {
		var t = new egret.tween.TweenGroup();
		this.loadingTween = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To3_i(),this._To4_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.fillColor = 0x000000;
		t.height = 1334;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.5;
		t.top = 0;
		t.width = 750;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "SimHei";
		t.height = 60;
		t.horizontalCenter = -2.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "努力加载中...";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 596.97;
		t.x = 97;
		t.y = 759.03;
		return t;
	};
	_proto.spadeImage_i = function () {
		var t = new eui.Image();
		this.spadeImage = t;
		t.height = 44;
		t.horizontalCenter = 0.5;
		t.source = "icon_loading_spade_png";
		t.verticalCenter = 0;
		t.width = 43;
		return t;
	};
	_proto.circleImage_i = function () {
		var t = new eui.Image();
		this.circleImage = t;
		t.anchorOffsetX = 112;
		t.anchorOffsetY = 40;
		t.height = 108;
		t.horizontalCenter = -3;
		t.source = "icon_loading_circle_png";
		t.verticalCenter = 0;
		t.width = 106;
		return t;
	};
	return LoadingComponentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Components/LoadingProgress.exml'] = window.LoadingProgress = (function (_super) {
	__extends(LoadingProgress, _super);
	function LoadingProgress() {
		_super.call(this);
		this.skinParts = ["track_pb_png","thumb"];
		
		this.height = 132;
		this.width = 112;
		this.elementsContent = [this._Image1_i(),this.track_pb_png_i(),this.thumb_i()];
	}
	var _proto = LoadingProgress.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.source = "image_loading_shadow_png";
		t.width = 112;
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.track_pb_png_i = function () {
		var t = new eui.Image();
		this.track_pb_png = t;
		t.height = 112;
		t.source = "image_loading_track_png";
		t.width = 112;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 112;
		t.source = "image_loading_thumb_png";
		t.width = 112;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return LoadingProgress;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Components/LoginTextInputSkin.exml'] = window.LoginTextInputSkin = (function (_super) {
	__extends(LoginTextInputSkin, _super);
	function LoginTextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.height = 68;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = LoginTextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "bg_login_input_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.percentHeight = 80;
		t.horizontalCenter = "0";
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.percentWidth = 90;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.percentHeight = 80;
		t.horizontalCenter = 0;
		t.strokeColor = 0xf72222;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 90;
		return t;
	};
	return LoginTextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Components/MessageAlertSkin.exml'] = window.MessageAlertSkin = (function (_super) {
	__extends(MessageAlertSkin, _super);
	function MessageAlertSkin() {
		_super.call(this);
		this.skinParts = ["messageLabel","buttonGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.messageLabel_i(),this.buttonGroup_i()];
	}
	var _proto = MessageAlertSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 378;
		t.horizontalCenter = 0;
		t.source = "bg_custom_alert_png";
		t.verticalCenter = 0;
		t.width = 666;
		return t;
	};
	_proto.messageLabel_i = function () {
		var t = new eui.Label();
		this.messageLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 184.33;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "请填写内容";
		t.textAlign = "center";
		t.textColor = 0x782314;
		t.verticalAlign = "middle";
		t.width = 528;
		t.y = 527.67;
		return t;
	};
	_proto.buttonGroup_i = function () {
		var t = new eui.Group();
		this.buttonGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.horizontalCenter = 0;
		t.width = 480;
		t.y = 712;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 160;
		t.horizontalAlign = "center";
		return t;
	};
	return MessageAlertSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Components/RaiseSliderSkin.exml'] = window.RaiseSliderSkin = (function (_super) {
	__extends(RaiseSliderSkin, _super);
	function RaiseSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","dashboardLabel","progressLabel","thumb"];
		
		this.height = 440;
		this.width = 120;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = RaiseSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 440;
		t.horizontalCenter = 0;
		t.source = "image_raise_slider_track_png";
		t.width = 10;
		t.y = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Group();
		this.thumb = t;
		t.height = 54;
		t.horizontalCenter = 0;
		t.width = 120;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.dashboardLabel_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 54;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_raise_progress_selector_png";
		t.width = 120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dashboardLabel_i = function () {
		var t = new eui.Label();
		this.dashboardLabel = t;
		t.fontFamily = "Arial";
		t.height = 45;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 55;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 138;
		t.x = -153;
		t.y = -3;
		t.elementsContent = [this._Image2_i(),this.progressLabel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.source = "icon_slider_progress_png";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.progressLabel_i = function () {
		var t = new eui.Label();
		this.progressLabel = t;
		t.height = 55;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 138;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return RaiseSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PlayGameButton/ShortcutRaiseButtonSkin.exml'] = window.ShortcutRaiseButtonSkin = (function (_super) {
	__extends(ShortcutRaiseButtonSkin, _super);
	function ShortcutRaiseButtonSkin() {
		_super.call(this);
		this.skinParts = ["icon","amountLabel","labelDisplay"];
		
		this.height = 96;
		this.width = 84;
		this.elementsContent = [this.icon_i(),this.amountLabel_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("icon","source","bg_shortcut_raise_disabled_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("icon","source","bg_shortcut_raise_disabled_png")
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.amount"],[0],this.amountLabel,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.label"],[0],this.labelDisplay,"text");
	}
	var _proto = ShortcutRaiseButtonSkin.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 76;
		t.source = "bg_shortcut_raise_png";
		t.width = 84;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.amountLabel_i = function () {
		var t = new eui.Label();
		this.amountLabel = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.textAlign = "center";
		t.width = 84;
		t.y = 77;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.height = 76;
		t.horizontalCenter = 0;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x4a330a;
		t.verticalAlign = "middle";
		t.width = 40;
		t.y = 0;
		return t;
	};
	return ShortcutRaiseButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PlayGameButton/AutonCheckOrFoldButtonSkin.exml'] = window.AutonCheckOrFoldButtonSkin = (function (_super) {
	__extends(AutonCheckOrFoldButtonSkin, _super);
	function AutonCheckOrFoldButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 126;
		this.width = 122;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","btn_check_or_fold_selected_png")
				])
			,
			new eui.State ("downAndSelected",
				[
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = AutonCheckOrFoldButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "btn_check_or_fold_unselect_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return AutonCheckOrFoldButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PlayGameButton/AutoCheckButtonSkin.exml'] = window.AutoCheckButtonSkin = (function (_super) {
	__extends(AutoCheckButtonSkin, _super);
	function AutoCheckButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 126;
		this.width = 122;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","btn_check_auto_selected_png")
				])
			,
			new eui.State ("downAndSelected",
				[
				])
			,
			new eui.State ("disabledAndSelected",
				[
				])
		];
	}
	var _proto = AutoCheckButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "btn_check_auto_unselect_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return AutoCheckButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PlayGameButton/PlayGameButtonGroupSkin.exml'] = window.PlayGameButtonGroupSkin = (function (_super) {
	__extends(PlayGameButtonGroupSkin, _super);
	var PlayGameButtonGroupSkin$Skin1 = 	(function (_super) {
		__extends(PlayGameButtonGroupSkin$Skin1, _super);
		function PlayGameButtonGroupSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayGameButtonGroupSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_fold_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayGameButtonGroupSkin$Skin1;
	})(eui.Skin);

	var PlayGameButtonGroupSkin$Skin2 = 	(function (_super) {
		__extends(PlayGameButtonGroupSkin$Skin2, _super);
		function PlayGameButtonGroupSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_check_disabled_png")
					])
			];
		}
		var _proto = PlayGameButtonGroupSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_check_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayGameButtonGroupSkin$Skin2;
	})(eui.Skin);

	var PlayGameButtonGroupSkin$Skin3 = 	(function (_super) {
		__extends(PlayGameButtonGroupSkin$Skin3, _super);
		function PlayGameButtonGroupSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_call_disabled_png")
					])
			];
		}
		var _proto = PlayGameButtonGroupSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_call_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayGameButtonGroupSkin$Skin3;
	})(eui.Skin);

	var PlayGameButtonGroupSkin$Skin4 = 	(function (_super) {
		__extends(PlayGameButtonGroupSkin$Skin4, _super);
		function PlayGameButtonGroupSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayGameButtonGroupSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_raise_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayGameButtonGroupSkin$Skin4;
	})(eui.Skin);

	var PlayGameButtonGroupSkin$Skin5 = 	(function (_super) {
		__extends(PlayGameButtonGroupSkin$Skin5, _super);
		function PlayGameButtonGroupSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayGameButtonGroupSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_all_in_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayGameButtonGroupSkin$Skin5;
	})(eui.Skin);

	var PlayGameButtonGroupSkin$Skin6 = 	(function (_super) {
		__extends(PlayGameButtonGroupSkin$Skin6, _super);
		function PlayGameButtonGroupSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayGameButtonGroupSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_quick_raise_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayGameButtonGroupSkin$Skin6;
	})(eui.Skin);

	function PlayGameButtonGroupSkin() {
		_super.call(this);
		this.skinParts = ["foldButton","checkButton","callButton","raiseButton","allInButton","quickRaiseButton","firstShortcutButton","secondShortcutButton","thirdShortcutButton","fourthShortcutButton","shortcutGroup","switchGroup","autoCheckOrFoldButton","autoCheckButton","autoGroup"];
		
		this.height = 320;
		this.width = 750;
		this.elementsContent = [this.switchGroup_i(),this.autoGroup_i()];
	}
	var _proto = PlayGameButtonGroupSkin.prototype;

	_proto.switchGroup_i = function () {
		var t = new eui.Group();
		this.switchGroup = t;
		t.height = 320;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.foldButton_i(),this.checkButton_i(),this.callButton_i(),this.raiseButton_i(),this.allInButton_i(),this.quickRaiseButton_i(),this.shortcutGroup_i()];
		return t;
	};
	_proto.foldButton_i = function () {
		var t = new eui.Button();
		this.foldButton = t;
		t.label = "";
		t.left = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 120;
		t.y = 170;
		t.skinName = PlayGameButtonGroupSkin$Skin1;
		return t;
	};
	_proto.checkButton_i = function () {
		var t = new eui.Button();
		this.checkButton = t;
		t.label = "";
		t.right = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 508;
		t.y = 170;
		t.skinName = PlayGameButtonGroupSkin$Skin2;
		return t;
	};
	_proto.callButton_i = function () {
		var t = new eui.Button();
		this.callButton = t;
		t.enabled = true;
		t.label = "";
		t.right = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 508;
		t.y = 170;
		t.skinName = PlayGameButtonGroupSkin$Skin3;
		return t;
	};
	_proto.raiseButton_i = function () {
		var t = new eui.Button();
		this.raiseButton = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 314;
		t.y = 100;
		t.skinName = PlayGameButtonGroupSkin$Skin4;
		return t;
	};
	_proto.allInButton_i = function () {
		var t = new eui.Button();
		this.allInButton = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 314;
		t.y = 100;
		t.skinName = PlayGameButtonGroupSkin$Skin5;
		return t;
	};
	_proto.quickRaiseButton_i = function () {
		var t = new eui.Button();
		this.quickRaiseButton = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 603;
		t.y = 330;
		t.skinName = PlayGameButtonGroupSkin$Skin6;
		return t;
	};
	_proto.shortcutGroup_i = function () {
		var t = new eui.Group();
		this.shortcutGroup = t;
		t.anchorOffsetX = 0;
		t.height = 96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.firstShortcutButton_i(),this.secondShortcutButton_i(),this.thirdShortcutButton_i(),this.fourthShortcutButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.firstShortcutButton_i = function () {
		var t = new ShortcutRaiseButton();
		this.firstShortcutButton = t;
		t.amount = "1000";
		t.height = 96;
		t.label = "1/3大盲";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ShortcutRaiseButtonSkin";
		t.width = 84;
		t.x = 445;
		t.y = 0;
		return t;
	};
	_proto.secondShortcutButton_i = function () {
		var t = new ShortcutRaiseButton();
		this.secondShortcutButton = t;
		t.amount = "1000";
		t.height = 96;
		t.label = "1/2大盲";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ShortcutRaiseButtonSkin";
		t.width = 84;
		t.x = 60;
		t.y = -1;
		return t;
	};
	_proto.thirdShortcutButton_i = function () {
		var t = new ShortcutRaiseButton();
		this.thirdShortcutButton = t;
		t.amount = "1000";
		t.height = 96;
		t.label = "2/3大盲";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ShortcutRaiseButtonSkin";
		t.width = 84;
		t.x = 608;
		t.y = 0;
		return t;
	};
	_proto.fourthShortcutButton_i = function () {
		var t = new ShortcutRaiseButton();
		this.fourthShortcutButton = t;
		t.amount = "1000";
		t.height = 96;
		t.label = "一倍底池";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ShortcutRaiseButtonSkin";
		t.width = 84;
		t.x = 182;
		t.y = -1;
		return t;
	};
	_proto.autoGroup_i = function () {
		var t = new eui.Group();
		this.autoGroup = t;
		t.height = 320;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.autoCheckOrFoldButton_i(),this.autoCheckButton_i()];
		return t;
	};
	_proto.autoCheckOrFoldButton_i = function () {
		var t = new eui.CheckBox();
		this.autoCheckOrFoldButton = t;
		t.height = 126;
		t.label = "CheckBox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "AutonCheckOrFoldButtonSkin";
		t.width = 122;
		t.x = 120;
		t.y = 170;
		return t;
	};
	_proto.autoCheckButton_i = function () {
		var t = new eui.CheckBox();
		this.autoCheckButton = t;
		t.height = 126;
		t.label = "CheckBox";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "AutoCheckButtonSkin";
		t.width = 122;
		t.x = 508;
		t.y = 170;
		return t;
	};
	return PlayGameButtonGroupSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/RaiseSelectorSkin.exml'] = window.RaiseSelectorSkin = (function (_super) {
	__extends(RaiseSelectorSkin, _super);
	var RaiseSelectorSkin$Skin7 = 	(function (_super) {
		__extends(RaiseSelectorSkin$Skin7, _super);
		function RaiseSelectorSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["image","labelDisplay"];
			
			this.elementsContent = [this.image_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("image","percentWidth",90),
						new eui.SetProperty("image","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RaiseSelectorSkin$Skin7.prototype;

		_proto.image_i = function () {
			var t = new eui.Image();
			this.image = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_raise_confirm_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RaiseSelectorSkin$Skin7;
	})(eui.Skin);

	var RaiseSelectorSkin$Skin8 = 	(function (_super) {
		__extends(RaiseSelectorSkin$Skin8, _super);
		function RaiseSelectorSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RaiseSelectorSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "image_raise_slider_dashboard_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RaiseSelectorSkin$Skin8;
	})(eui.Skin);

	var RaiseSelectorSkin$Skin9 = 	(function (_super) {
		__extends(RaiseSelectorSkin$Skin9, _super);
		function RaiseSelectorSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = RaiseSelectorSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_selector_all_in_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return RaiseSelectorSkin$Skin9;
	})(eui.Skin);

	function RaiseSelectorSkin() {
		_super.call(this);
		this.skinParts = ["background","confirmButton","dashboardButton","raiseSlider","allInButton"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.background_i(),this.confirmButton_i(),this.dashboardButton_i(),this._Image1_i(),this.raiseSlider_i(),this.allInButton_i()];
	}
	var _proto = RaiseSelectorSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.fillAlpha = 0.7;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.confirmButton_i = function () {
		var t = new eui.Button();
		this.confirmButton = t;
		t.label = "";
		t.x = 314;
		t.y = 920;
		t.skinName = RaiseSelectorSkin$Skin7;
		return t;
	};
	_proto.dashboardButton_i = function () {
		var t = new eui.Button();
		this.dashboardButton = t;
		t.label = "0";
		t.x = 313;
		t.y = 350;
		t.skinName = RaiseSelectorSkin$Skin8;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.source = "icon_raise_slider_arrow_png";
		t.width = 34;
		t.x = 356;
		t.y = 880;
		return t;
	};
	_proto.raiseSlider_i = function () {
		var t = new RaiseSlider();
		this.raiseSlider = t;
		t.height = 430;
		t.skinName = "RaiseSliderSkin";
		t.width = 120;
		t.x = 313;
		t.y = 428;
		return t;
	};
	_proto.allInButton_i = function () {
		var t = new eui.Button();
		this.allInButton = t;
		t.horizontalCenter = -2;
		t.label = "";
		t.y = 280;
		t.skinName = RaiseSelectorSkin$Skin9;
		return t;
	};
	return RaiseSelectorSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/BottomToolbarSkin.exml'] = window.BottomToolbarSkin = (function (_super) {
	__extends(BottomToolbarSkin, _super);
	var BottomToolbarSkin$Skin10 = 	(function (_super) {
		__extends(BottomToolbarSkin$Skin10, _super);
		function BottomToolbarSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BottomToolbarSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_game_record@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BottomToolbarSkin$Skin10;
	})(eui.Skin);

	function BottomToolbarSkin() {
		_super.call(this);
		this.skinParts = ["leaderboardButton"];
		
		this.height = 80;
		this.width = 750;
		this.elementsContent = [this.leaderboardButton_i()];
	}
	var _proto = BottomToolbarSkin.prototype;

	_proto.leaderboardButton_i = function () {
		var t = new eui.Button();
		this.leaderboardButton = t;
		t.bottom = 23;
		t.height = 56;
		t.label = "";
		t.left = 48;
		t.skinName = BottomToolbarSkin$Skin10;
		return t;
	};
	return BottomToolbarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/DebugView/DebugViewSkin.exml'] = window.DebugViewSkin = (function (_super) {
	__extends(DebugViewSkin, _super);
	function DebugViewSkin() {
		_super.call(this);
		this.skinParts = ["logList","logScroller","domainLabel"];
		
		this.height = 600;
		this.width = 600;
		this.elementsContent = [this._Rect1_i(),this.logScroller_i(),this.domainLabel_i()];
	}
	var _proto = DebugViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 600;
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.logScroller_i = function () {
		var t = new eui.Scroller();
		this.logScroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 560;
		t.width = 600;
		t.x = 0;
		t.y = 40;
		t.viewport = this.logList_i();
		return t;
	};
	_proto.logList_i = function () {
		var t = new eui.List();
		this.logList = t;
		t.height = 560;
		t.width = 600;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.paddingBottom = 0;
		t.paddingLeft = 20;
		t.paddingRight = 20;
		t.paddingTop = 0;
		return t;
	};
	_proto.domainLabel_i = function () {
		var t = new eui.Label();
		this.domainLabel = t;
		t.text = "Label";
		t.textColor = 0xf7ea11;
		t.width = 560;
		t.x = 20;
		t.y = 5;
		return t;
	};
	return DebugViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	var GameSkin$Skin11 = 	(function (_super) {
		__extends(GameSkin$Skin11, _super);
		function GameSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "icon_talk_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin11;
	})(eui.Skin);

	var GameSkin$Skin12 = 	(function (_super) {
		__extends(GameSkin$Skin12, _super);
		function GameSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "icon_microphone_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin12;
	})(eui.Skin);

	var GameSkin$Skin13 = 	(function (_super) {
		__extends(GameSkin$Skin13, _super);
		function GameSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_room_start_game_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin13;
	})(eui.Skin);

	var GameSkin$Skin14 = 	(function (_super) {
		__extends(GameSkin$Skin14, _super);
		function GameSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_game_dropdown_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin14;
	})(eui.Skin);

	var GameSkin$Skin15 = 	(function (_super) {
		__extends(GameSkin$Skin15, _super);
		function GameSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "icon_hand_notes@2x_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSkin$Skin15;
	})(eui.Skin);

	function GameSkin() {
		_super.call(this);
		this.skinParts = ["mainPotLabel","pinLabel","creatorLabel","blindLabel","talkButton","microphoneButton","communityCardList","startGameButton","cardTypeLabel","potsList","menuButton","playGameButtonGroup","raiseSelector","quickRaiser","bottomToolbar","reviewboardButton","infoLabel","promptLabel","group","debugView","cardPattern"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.group_i(),this.debugView_i(),this.cardPattern_i()];
	}
	var _proto = GameSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "bg_game_png";
		t.percentWidth = 100;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 1334;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.mainPotLabel_i(),this.pinLabel_i(),this.creatorLabel_i(),this.blindLabel_i(),this.talkButton_i(),this.microphoneButton_i(),this.communityCardList_i(),this.startGameButton_i(),this.cardTypeLabel_i(),this.potsList_i(),this.menuButton_i(),this.playGameButtonGroup_i(),this.raiseSelector_i(),this.quickRaiser_i(),this.bottomToolbar_i(),this.reviewboardButton_i(),this.infoLabel_i(),this.promptLabel_i()];
		return t;
	};
	_proto.mainPotLabel_i = function () {
		var t = new eui.Label();
		this.mainPotLabel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "底池: 0";
		t.textAlign = "center";
		t.textColor = 0x034d45;
		t.width = 200;
		t.x = 275;
		t.y = 350;
		return t;
	};
	_proto.pinLabel_i = function () {
		var t = new eui.Label();
		this.pinLabel = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "房间号";
		t.textAlign = "center";
		t.textColor = 0x034d45;
		t.width = 400;
		t.y = 840;
		return t;
	};
	_proto.creatorLabel_i = function () {
		var t = new eui.Label();
		this.creatorLabel = t;
		t.height = 33;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x034d45;
		t.verticalAlign = "middle";
		t.width = 400;
		t.y = 800;
		return t;
	};
	_proto.blindLabel_i = function () {
		var t = new eui.Label();
		this.blindLabel = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "盲注";
		t.textAlign = "center";
		t.textColor = 0x034d45;
		t.width = 200;
		t.y = 870;
		return t;
	};
	_proto.talkButton_i = function () {
		var t = new eui.Button();
		this.talkButton = t;
		t.bottom = 20;
		t.label = "";
		t.left = 136;
		t.visible = false;
		t.skinName = GameSkin$Skin11;
		return t;
	};
	_proto.microphoneButton_i = function () {
		var t = new eui.Button();
		this.microphoneButton = t;
		t.bottom = 20;
		t.label = "";
		t.right = 136;
		t.visible = false;
		t.skinName = GameSkin$Skin12;
		return t;
	};
	_proto.communityCardList_i = function () {
		var t = new eui.List();
		this.communityCardList = t;
		t.anchorOffsetX = 0;
		t.height = 130;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = CardItemSkin;
		t.width = 435;
		t.y = 590;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.startGameButton_i = function () {
		var t = new eui.Button();
		this.startGameButton = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.visible = false;
		t.y = 820;
		t.skinName = GameSkin$Skin13;
		return t;
	};
	_proto.cardTypeLabel_i = function () {
		var t = new eui.Label();
		this.cardTypeLabel = t;
		t.height = 22;
		t.size = 22;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 136;
		t.x = 363;
		t.y = 1217;
		return t;
	};
	_proto.potsList_i = function () {
		var t = new eui.List();
		this.potsList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = PotItemSkin;
		t.width = 300;
		t.y = 400;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnAlign = "justifyUsingWidth";
		t.horizontalAlign = "contentJustify";
		t.orientation = "rows";
		t.rowAlign = "top";
		t.verticalAlign = "contentJustify";
		return t;
	};
	_proto.menuButton_i = function () {
		var t = new eui.Button();
		this.menuButton = t;
		t.label = "";
		t.x = 34;
		t.y = 30;
		t.skinName = GameSkin$Skin14;
		return t;
	};
	_proto.playGameButtonGroup_i = function () {
		var t = new PlayGameButtonGroup();
		this.playGameButtonGroup = t;
		t.height = 320;
		t.skinName = "PlayGameButtonGroupSkin";
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 820;
		return t;
	};
	_proto.raiseSelector_i = function () {
		var t = new RaiseSelector();
		this.raiseSelector = t;
		t.percentHeight = 100;
		t.skinName = "RaiseSelectorSkin";
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.quickRaiser_i = function () {
		var t = new NumericKeyboardScene();
		this.quickRaiser = t;
		t.height = 1334;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bottomToolbar_i = function () {
		var t = new BottomToolbar();
		this.bottomToolbar = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.skinName = "BottomToolbarSkin";
		return t;
	};
	_proto.reviewboardButton_i = function () {
		var t = new eui.Button();
		this.reviewboardButton = t;
		t.label = "";
		t.x = 644;
		t.y = 30;
		t.skinName = GameSkin$Skin15;
		return t;
	};
	_proto.infoLabel_i = function () {
		var t = new eui.Label();
		this.infoLabel = t;
		t.bottom = 20;
		t.height = 60;
		t.horizontalCenter = 0;
		t.text = "DebugLabel";
		t.textAlign = "center";
		t.visible = false;
		t.width = 450;
		return t;
	};
	_proto.promptLabel_i = function () {
		var t = new eui.Label();
		this.promptLabel = t;
		t.size = 20;
		t.text = "等待下一局开始";
		t.visible = false;
		t.x = 376;
		t.y = 1153.5;
		return t;
	};
	_proto.debugView_i = function () {
		var t = new DebugView();
		this.debugView = t;
		t.height = 600;
		t.horizontalCenter = 0;
		t.skinName = "DebugViewSkin";
		t.visible = false;
		t.width = 600;
		t.y = 0;
		return t;
	};
	_proto.cardPattern_i = function () {
		var t = new CardPattern();
		this.cardPattern = t;
		t.height = 1334;
		t.visible = false;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Leaderboard/LeaderboardPlayerInfoHeaderSkin.exml'] = window.LeaderboardPlayerInfoHeaderSkin = (function (_super) {
	__extends(LeaderboardPlayerInfoHeaderSkin, _super);
	function LeaderboardPlayerInfoHeaderSkin() {
		_super.call(this);
		this.skinParts = ["buyInLabel","callAmountLabel","scoreLabel"];
		
		this.height = 68;
		this.width = 618;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this.buyInLabel_i(),this.callAmountLabel_i(),this.scoreLabel_i()];
	}
	var _proto = LeaderboardPlayerInfoHeaderSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x021b19;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.left = 40;
		t.size = 24;
		t.text = "昵称";
		t.textColor = 0x6BFFFD;
		t.verticalCenter = 0;
		return t;
	};
	_proto.buyInLabel_i = function () {
		var t = new eui.Label();
		this.buyInLabel = t;
		t.horizontalCenter = 40;
		t.size = 24;
		t.text = "带入";
		t.textColor = 0x6BFFFD;
		t.verticalCenter = 0;
		return t;
	};
	_proto.callAmountLabel_i = function () {
		var t = new eui.Label();
		this.callAmountLabel = t;
		t.horizontalCenter = 143;
		t.size = 24;
		t.text = "手数";
		t.textColor = 0x6BFFFD;
		t.verticalCenter = 0;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.horizontalCenter = 245;
		t.size = 24;
		t.text = "战绩";
		t.textColor = 0x6BFFFD;
		t.verticalCenter = 0;
		return t;
	};
	return LeaderboardPlayerInfoHeaderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Leaderboard/LeaderboardViewerHeaderSkin.exml'] = window.LeaderboardViewerHeaderSkin = (function (_super) {
	__extends(LeaderboardViewerHeaderSkin, _super);
	function LeaderboardViewerHeaderSkin() {
		_super.call(this);
		this.skinParts = ["viewPlayersAmountLabel"];
		
		this.height = 68;
		this.width = 618;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = LeaderboardViewerHeaderSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x021B19;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this.viewPlayersAmountLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "left";
		t.paddingLeft = 38;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "围观群众";
		t.textColor = 0x6BFFFD;
		t.x = 38;
		t.y = 22;
		return t;
	};
	_proto.viewPlayersAmountLabel_i = function () {
		var t = new eui.Label();
		this.viewPlayersAmountLabel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textColor = 0x6BFFFD;
		t.x = 48;
		t.y = 32;
		return t;
	};
	return LeaderboardViewerHeaderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Leaderboard/LeaderboardSkin.exml'] = window.LeaderboardSkin = (function (_super) {
	__extends(LeaderboardSkin, _super);
	function LeaderboardSkin() {
		_super.call(this);
		this.skinParts = ["remainTimeLabel","headerGroup","playerInfoHeader","playerList","viewerHeader","viewerList","contentScroller"];
		
		this.height = 1334;
		this.width = 618;
		this.elementsContent = [this._Rect1_i(),this.headerGroup_i(),this.contentScroller_i()];
	}
	var _proto = LeaderboardSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x1e2e2d;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.headerGroup_i = function () {
		var t = new eui.Group();
		this.headerGroup = t;
		t.height = 84;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect2_i(),this.remainTimeLabel_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x021B19;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.remainTimeLabel_i = function () {
		var t = new eui.Label();
		this.remainTimeLabel = t;
		t.bottom = 24;
		t.height = 22;
		t.right = 20;
		t.size = 22;
		t.text = "剩余时间：00:30:18";
		t.textColor = 0x6BFFFD;
		t.visible = false;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 24;
		t.height = 30;
		t.left = 40;
		t.text = "实时战绩";
		t.textColor = 0x6BFFFD;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.bottom = 0;
		t.height = 1250;
		t.width = 618;
		t.x = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.playerInfoHeader_i(),this.playerList_i(),this.viewerHeader_i(),this.viewerList_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto.playerInfoHeader_i = function () {
		var t = new LeaderboardPlayerInfoHeader();
		this.playerInfoHeader = t;
		t.skinName = "LeaderboardPlayerInfoHeaderSkin";
		t.x = 433;
		t.y = 192;
		return t;
	};
	_proto.playerList_i = function () {
		var t = new eui.List();
		this.playerList = t;
		t.width = 618;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.viewerHeader_i = function () {
		var t = new LeaderboardViewerHeader();
		this.viewerHeader = t;
		t.skinName = "LeaderboardViewerHeaderSkin";
		t.x = 285;
		t.y = 249;
		return t;
	};
	_proto.viewerList_i = function () {
		var t = new eui.List();
		this.viewerList = t;
		t.width = 618;
		t.x = 126;
		t.y = 424;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.columnWidth = 206;
		t.horizontalAlign = "center";
		t.horizontalGap = 0;
		t.orientation = "columns";
		t.requestedColumnCount = 3;
		t.rowHeight = 180;
		t.verticalAlign = "top";
		t.verticalGap = 0;
		return t;
	};
	return LeaderboardSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/LeaderboardSceneSkin.exml'] = window.LeaderboardSceneSkin = (function (_super) {
	__extends(LeaderboardSceneSkin, _super);
	function LeaderboardSceneSkin() {
		_super.call(this);
		this.skinParts = ["showTweenGroup","hideTweenGroup","background","leaderboard"];
		
		this.height = 1334;
		this.width = 750;
		this.showTweenGroup_i();
		this.hideTweenGroup_i();
		this.elementsContent = [this.background_i(),this.leaderboard_i()];
		this.states = [
			new eui.State ("show",
				[
					new eui.SetProperty("background","x",0),
					new eui.SetProperty("background","y",0),
					new eui.SetProperty("background","scaleX",1),
					new eui.SetProperty("background","scaleY",1),
					new eui.SetProperty("leaderboard","x",0),
					new eui.SetProperty("leaderboard","y",0),
					new eui.SetProperty("leaderboard","scaleX",1),
					new eui.SetProperty("leaderboard","scaleY",1)
				])
		];
		
		eui.Binding.$bindProperties(this, ["leaderboard"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [-618],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, ["leaderboard"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [-618],[],this._Object4,"x");
	}
	var _proto = LeaderboardSceneSkin.prototype;

	_proto.showTweenGroup_i = function () {
		var t = new egret.tween.TweenGroup();
		this.showTweenGroup = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.hideTweenGroup_i = function () {
		var t = new egret.tween.TweenGroup();
		this.hideTweenGroup = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.fillAlpha = 0.1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.leaderboard_i = function () {
		var t = new Leaderboard();
		this.leaderboard = t;
		t.skinName = "LeaderboardSkin";
		return t;
	};
	return LeaderboardSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/ReviewboardHeaderSkin.exml'] = window.ReviewboardHeaderSkin = (function (_super) {
	__extends(ReviewboardHeaderSkin, _super);
	function ReviewboardHeaderSkin() {
		_super.call(this);
		this.skinParts = ["dateLabel","potLabel"];
		
		this.height = 98;
		this.width = 620;
		this.elementsContent = [this._Rect1_i(),this.dateLabel_i(),this._Group1_i()];
	}
	var _proto = ReviewboardHeaderSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x021b19;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.dateLabel_i = function () {
		var t = new eui.Label();
		this.dateLabel = t;
		t.bottom = 38;
		t.height = 22;
		t.left = 29;
		t.size = 22;
		t.text = "";
		t.textColor = 0x6bfffd;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 38;
		t.height = 50;
		t.right = 39;
		t.width = 200;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this.potLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "right";
		t.verticalAlign = "bottom";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 38;
		t.height = 22;
		t.left = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "底池：";
		t.textColor = 0x6BFFFD;
		t.x = -380;
		t.y = 38;
		return t;
	};
	_proto.potLabel_i = function () {
		var t = new eui.Label();
		this.potLabel = t;
		t.bottom = 38;
		t.height = 22;
		t.left = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "0";
		t.textColor = 0x6BFFFD;
		t.x = -390;
		t.y = 28;
		return t;
	};
	return ReviewboardHeaderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/SettlementHistory/ReviewboardSettlementHistorySkin.exml'] = window.ReviewboardSettlementHistorySkin = (function (_super) {
	__extends(ReviewboardSettlementHistorySkin, _super);
	function ReviewboardSettlementHistorySkin() {
		_super.call(this);
		this.skinParts = ["settlementList"];
		
		this.height = 1006;
		this.width = 620;
		this.elementsContent = [this._Scroller1_i()];
	}
	var _proto = ReviewboardSettlementHistorySkin.prototype;

	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.settlementList_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto.settlementList_i = function () {
		var t = new eui.List();
		this.settlementList = t;
		t.percentWidth = 100;
		t.x = 66;
		t.y = 132;
		return t;
	};
	return ReviewboardSettlementHistorySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/GameHistory/ReviewboardBlindingBetHeaderSkin.exml'] = window.ReviewboardBlindingBetHeaderSkin = (function (_super) {
	__extends(ReviewboardBlindingBetHeaderSkin, _super);
	function ReviewboardBlindingBetHeaderSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 60;
		this.width = 620;
		this.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
	}
	var _proto = ReviewboardBlindingBetHeaderSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x283736;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.left = 30;
		t.size = 24;
		t.text = "位置 / 玩家";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.left = 340;
		t.size = 24;
		t.text = "行动";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.right = 30;
		t.size = 24;
		t.text = "后手";
		t.verticalCenter = 0;
		t.width = 48;
		return t;
	};
	return ReviewboardBlindingBetHeaderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/GameHistory/ReviewboardGameHistorySkin.exml'] = window.ReviewboardGameHistorySkin = (function (_super) {
	__extends(ReviewboardGameHistorySkin, _super);
	function ReviewboardGameHistorySkin() {
		_super.call(this);
		this.skinParts = ["scrollerGroup","contentScroller"];
		
		this.height = 1006;
		this.width = 620;
		this.elementsContent = [this.contentScroller_i(),this._ReviewboardBlindingBetHeader1_i()];
	}
	var _proto = ReviewboardGameHistorySkin.prototype;

	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.viewport = this.scrollerGroup_i();
		return t;
	};
	_proto.scrollerGroup_i = function () {
		var t = new eui.Group();
		this.scrollerGroup = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.paddingTop = 60;
		t.verticalAlign = "top";
		return t;
	};
	_proto._ReviewboardBlindingBetHeader1_i = function () {
		var t = new ReviewboardBlindingBetHeader();
		t.skinName = "ReviewboardBlindingBetHeaderSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ReviewboardGameHistorySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Utils/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 10;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "reviewboard_thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/ReviewboardFooterSkin.exml'] = window.ReviewboardFooterSkin = (function (_super) {
	__extends(ReviewboardFooterSkin, _super);
	var ReviewboardFooterSkin$Skin16 = 	(function (_super) {
		__extends(ReviewboardFooterSkin$Skin16, _super);
		function ReviewboardFooterSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ReviewboardFooterSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "img_previous_page@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ReviewboardFooterSkin$Skin16;
	})(eui.Skin);

	var ReviewboardFooterSkin$Skin17 = 	(function (_super) {
		__extends(ReviewboardFooterSkin$Skin17, _super);
		function ReviewboardFooterSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ReviewboardFooterSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "img_next_page@2x_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ReviewboardFooterSkin$Skin17;
	})(eui.Skin);

	function ReviewboardFooterSkin() {
		_super.call(this);
		this.skinParts = ["pageSlider","previousButton","pageLabel","nextButton"];
		
		this.height = 177;
		this.width = 620;
		this.elementsContent = [this.pageSlider_i(),this._Group1_i()];
	}
	var _proto = ReviewboardFooterSkin.prototype;

	_proto.pageSlider_i = function () {
		var t = new eui.HSlider();
		this.pageSlider = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.HSliderSkin";
		t.top = 38;
		t.width = 460;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 64;
		t.horizontalCenter = 0;
		t.top = 76;
		t.width = 400;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.previousButton_i(),this.pageLabel_i(),this.nextButton_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 83;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.previousButton_i = function () {
		var t = new eui.Button();
		this.previousButton = t;
		t.label = "";
		t.x = 67;
		t.y = 22;
		t.skinName = ReviewboardFooterSkin$Skin16;
		return t;
	};
	_proto.pageLabel_i = function () {
		var t = new eui.Label();
		this.pageLabel = t;
		t.text = "6/16";
		t.textAlign = "center";
		t.textColor = 0xb8c2c0;
		t.width = 100;
		t.x = 96;
		t.y = 4;
		return t;
	};
	_proto.nextButton_i = function () {
		var t = new eui.Button();
		this.nextButton = t;
		t.label = "";
		t.x = 77;
		t.y = 32;
		t.skinName = ReviewboardFooterSkin$Skin17;
		return t;
	};
	return ReviewboardFooterSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/ReviewboardSkin.exml'] = window.ReviewboardSkin = (function (_super) {
	__extends(ReviewboardSkin, _super);
	function ReviewboardSkin() {
		_super.call(this);
		this.skinParts = ["loadingLabel","header","settlementHistoryView","gameHistoryView","contentViewStack","contentTabbar","footer"];
		
		this.height = 1334;
		this.width = 620;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.loadingLabel_i(),this._Group2_i()];
	}
	var _proto = ReviewboardSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x072927;
		t.height = 1157;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x0d3a37;
		t.height = 177;
		t.horizontalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.loadingLabel_i = function () {
		var t = new eui.Label();
		this.loadingLabel = t;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "数据加载中...";
		t.textColor = 0xb8c2c0;
		t.verticalCenter = -65;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.header_i(),this.contentViewStack_i(),this._Group1_i(),this.footer_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.header_i = function () {
		var t = new ReviewboardHeader();
		this.header = t;
		t.skinName = "ReviewboardHeaderSkin";
		t.x = 215;
		t.y = -4;
		return t;
	};
	_proto.contentViewStack_i = function () {
		var t = new eui.ViewStack();
		this.contentViewStack = t;
		t.height = 1006;
		t.scaleX = 1;
		t.scaleY = 1;
		t.selectedIndex = 1;
		t.width = 620;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.settlementHistoryView_i(),this.gameHistoryView_i()];
		return t;
	};
	_proto.settlementHistoryView_i = function () {
		var t = new ReviewboardSettlementHistoryView();
		this.settlementHistoryView = t;
		t.percentHeight = 100;
		t.name = "牌局结算";
		t.skinName = "ReviewboardSettlementHistorySkin";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameHistoryView_i = function () {
		var t = new ReviewboardGameHistoryView();
		this.gameHistoryView = t;
		t.percentHeight = 100;
		t.name = "牌局详情";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReviewboardGameHistorySkin";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 177;
		t.height = 53;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 1104;
		t.elementsContent = [this._Rect3_i(),this.contentTabbar_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x021C1A;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.contentTabbar_i = function () {
		var t = new eui.TabBar();
		this.contentTabbar = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.footer_i = function () {
		var t = new ReviewboardFooter();
		this.footer = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReviewboardFooterSkin";
		t.x = 0;
		t.y = 1157;
		return t;
	};
	return ReviewboardSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/ReviewboardSceneSkin.exml'] = window.ReviewboardSceneSkin = (function (_super) {
	__extends(ReviewboardSceneSkin, _super);
	function ReviewboardSceneSkin() {
		_super.call(this);
		this.skinParts = ["hideTweenGroup","showTweenGroup","background","reviewboard"];
		
		this.height = 1334;
		this.width = 750;
		this.hideTweenGroup_i();
		this.showTweenGroup_i();
		this.elementsContent = [this.background_i(),this.reviewboard_i()];
		
		eui.Binding.$bindProperties(this, ["reviewboard"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [130],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [750],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, ["reviewboard"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [750],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [130],[],this._Object4,"x");
	}
	var _proto = ReviewboardSceneSkin.prototype;

	_proto.hideTweenGroup_i = function () {
		var t = new egret.tween.TweenGroup();
		this.hideTweenGroup = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto.showTweenGroup_i = function () {
		var t = new egret.tween.TweenGroup();
		this.showTweenGroup = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 150;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.fillAlpha = 0.1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.reviewboard_i = function () {
		var t = new Reviewboard();
		this.reviewboard = t;
		t.skinName = "ReviewboardSkin";
		t.x = 130;
		t.y = 0;
		return t;
	};
	return ReviewboardSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/BuyInApplication/ApplicationRecoreItemSkin.exml'] = window.ApplicationRecoreItemSkin = (function (_super) {
	__extends(ApplicationRecoreItemSkin, _super);
	function ApplicationRecoreItemSkin() {
		_super.call(this);
		this.skinParts = ["nicknameLabel","scroeLabel","rejectLabel","agreeLabel","operationGroup","statusLabel"];
		
		this.height = 132;
		this.width = 662;
		this.elementsContent = [this.nicknameLabel_i(),this.scroeLabel_i(),this._Label1_i(),this.operationGroup_i(),this._Rect2_i(),this.statusLabel_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.nickname"],[0],this.nicknameLabel,"text");
	}
	var _proto = ApplicationRecoreItemSkin.prototype;

	_proto.nicknameLabel_i = function () {
		var t = new eui.Label();
		this.nicknameLabel = t;
		t.textColor = 0x6bfffd;
		t.width = 300;
		t.x = 14;
		t.y = 24;
		return t;
	};
	_proto.scroeLabel_i = function () {
		var t = new eui.Label();
		this.scroeLabel = t;
		t.text = "申请带入记分牌 2000";
		t.width = 300;
		t.x = 14;
		t.y = 60;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "* 该房间最低带入记分牌为 400";
		t.textAlign = "left";
		t.textColor = 0xFE2A2A;
		t.width = 400;
		t.x = 14;
		t.y = 100;
		return t;
	};
	_proto.operationGroup_i = function () {
		var t = new eui.Group();
		this.operationGroup = t;
		t.bottom = 0;
		t.height = 132;
		t.right = 0;
		t.width = 250;
		t.elementsContent = [this.rejectLabel_i(),this.agreeLabel_i(),this._Rect1_i()];
		return t;
	};
	_proto.rejectLabel_i = function () {
		var t = new eui.Label();
		this.rejectLabel = t;
		t.left = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "拒绝";
		t.textColor = 0x86acac;
		t.touchEnabled = true;
		t.y = 53.94;
		return t;
	};
	_proto.agreeLabel_i = function () {
		var t = new eui.Label();
		this.agreeLabel = t;
		t.right = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "同意";
		t.textColor = 0xcadddd;
		t.touchEnabled = true;
		t.y = 54;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x889595;
		t.height = 20;
		t.horizontalCenter = 0;
		t.rotation = 357.29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 2;
		t.y = 62;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x041716;
		t.height = 2;
		t.width = 662;
		t.x = 0;
		return t;
	};
	_proto.statusLabel_i = function () {
		var t = new eui.Label();
		this.statusLabel = t;
		t.right = 20;
		t.text = "已同意";
		t.textAlign = "right";
		t.textColor = 0x5e6f6f;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 230;
		return t;
	};
	return ApplicationRecoreItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/BuyInApplication/RecordItemButtonSkin.exml'] = window.RecordItemButtonSkin = (function (_super) {
	__extends(RecordItemButtonSkin, _super);
	function RecordItemButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = RecordItemButtonSkin.prototype;

	return RecordItemButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/BuyInApplication/RoomRecordSkin.exml'] = window.RoomRecordSkin = (function (_super) {
	__extends(RoomRecordSkin, _super);
	function RoomRecordSkin() {
		_super.call(this);
		this.skinParts = ["recordList"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = RoomRecordSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 770;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 720;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Rect2_i(),this.recordList_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x021b19;
		t.height = 770;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 720;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "房间消息";
		t.textAlign = "center";
		t.width = 300;
		t.x = 210;
		t.y = 32;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x072927;
		t.height = 652;
		t.horizontalCenter = 0;
		t.width = 688;
		t.y = 102;
		return t;
	};
	_proto.recordList_i = function () {
		var t = new eui.List();
		this.recordList = t;
		t.height = 652;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = ApplicationRecoreItemSkin;
		t.width = 688;
		t.y = 102;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.paddingTop = 10;
		t.verticalAlign = "top";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.nickname = "mike";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.nickname = "sherlly";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.nickname = "null";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.nickname = "null";
		return t;
	};
	return RoomRecordSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/BuyInView/BuyInButtonSkin.exml'] = window.BuyInButtonSkin = (function (_super) {
	__extends(BuyInButtonSkin, _super);
	function BuyInButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 102;
		this.width = 536;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x146862)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BuyInButtonSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0x072927;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x041716;
		t.height = 2;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "Label";
		t.verticalCenter = 0;
		return t;
	};
	return BuyInButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/BuyInView/BuyInSliderSkin.exml'] = window.BuyInSliderSkin = (function (_super) {
	__extends(BuyInSliderSkin, _super);
	function BuyInSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.height = 46;
		this.width = 499;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = BuyInSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 10;
		t.horizontalCenter = 0;
		t.source = "image_buy_in_track_png";
		t.verticalCenter = 0;
		t.width = 476;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 46;
		t.source = "image_buy_in_thumb_png";
		t.verticalCenter = 0;
		t.width = 46;
		t.x = 0;
		return t;
	};
	return BuyInSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/BuyInView/BuyInSkin.exml'] = window.BuyInSkin = (function (_super) {
	__extends(BuyInSkin, _super);
	function BuyInSkin() {
		_super.call(this);
		this.skinParts = ["background","scoreLabel","scoreSlider","confirmButton","minBuyLabel","balanceLabel","group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.background_i(),this.group_i()];
	}
	var _proto = BuyInSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 536;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Image1_i(),this.scoreLabel_i(),this.scoreSlider_i(),this.confirmButton_i(),this.minBuyLabel_i(),this.balanceLabel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0x072927;
		t.height = 400;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 536;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "带入记分牌:";
		t.textColor = 0xe3e9e9;
		t.x = 80;
		t.y = 80;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_buy_in_chip_png";
		t.width = 36;
		t.x = 300;
		t.y = 78;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.size = 44;
		t.text = "0";
		t.width = 160;
		t.x = 360;
		t.y = 74;
		return t;
	};
	_proto.scoreSlider_i = function () {
		var t = new eui.HSlider();
		this.scoreSlider = t;
		t.height = 46;
		t.horizontalCenter = 0;
		t.skinName = "BuyInSliderSkin";
		t.width = 499;
		t.y = 180;
		return t;
	};
	_proto.confirmButton_i = function () {
		var t = new eui.Button();
		this.confirmButton = t;
		t.bottom = 0;
		t.height = 102;
		t.label = "确定";
		t.skinName = "BuyInButtonSkin";
		t.width = 536;
		t.x = 0;
		return t;
	};
	_proto.minBuyLabel_i = function () {
		var t = new eui.Label();
		this.minBuyLabel = t;
		t.height = 18;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xfe2a2a;
		t.width = 400;
		t.x = 68;
		t.y = 130;
		return t;
	};
	_proto.balanceLabel_i = function () {
		var t = new eui.Label();
		this.balanceLabel = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x596e6d;
		t.width = 400;
		t.y = 250;
		return t;
	};
	return BuyInSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/CardItemSkin.exml'] = window.CardItemSkin = (function (_super) {
	__extends(CardItemSkin, _super);
	function CardItemSkin() {
		_super.call(this);
		this.skinParts = ["cardImage"];
		
		this.height = 124;
		this.width = 83;
		this.elementsContent = [this.cardImage_i()];
	}
	var _proto = CardItemSkin.prototype;

	_proto.cardImage_i = function () {
		var t = new eui.Image();
		this.cardImage = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 65;
		t.height = 124;
		t.horizontalCenter = 0;
		t.source = "poker_back_png";
		t.verticalCenter = 0;
		t.width = 82;
		return t;
	};
	return CardItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/CardPatternSkin.exml'] = window.CardPatternSkin = (function (_super) {
	__extends(CardPatternSkin, _super);
	function CardPatternSkin() {
		_super.call(this);
		this.skinParts = ["patternImage"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.patternImage_i()];
	}
	var _proto = CardPatternSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.patternImage_i = function () {
		var t = new eui.Image();
		this.patternImage = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1334;
		t.source = "image_card_pattern_png";
		t.width = 620;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return CardPatternSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/ChatSkin.exml'] = window.ChatSkin = (function (_super) {
	__extends(ChatSkin, _super);
	function ChatSkin() {
		_super.call(this);
		this.skinParts = ["background","chatTextInput","sendButton","messageList","scroller"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.background_i(),this._Rect1_i(),this.chatTextInput_i(),this.sendButton_i(),this.scroller_i()];
	}
	var _proto = ChatSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x01362a;
		t.percentHeight = 100;
		t.width = 620;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chatTextInput_i = function () {
		var t = new eui.TextInput();
		this.chatTextInput = t;
		t.bottom = 20;
		t.height = 88;
		t.left = 20;
		t.skinName = "ChatTextInputSkin";
		t.width = 400;
		return t;
	};
	_proto.sendButton_i = function () {
		var t = new eui.Button();
		this.sendButton = t;
		t.label = "发送";
		t.skinName = "ChatSendButtonSkin";
		t.x = 440;
		t.y = 1226;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.anchorOffsetY = 0;
		t.height = 1200;
		t.width = 620;
		t.x = 0;
		t.y = 0;
		t.viewport = this.messageList_i();
		return t;
	};
	_proto.messageList_i = function () {
		var t = new eui.List();
		this.messageList = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.paddingBottom = 10;
		t.paddingLeft = 10;
		t.paddingRight = 10;
		t.paddingTop = 10;
		return t;
	};
	return ChatSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Leaderboard/LeaderboardListItemSkin.exml'] = window.LeaderboardListItemSkin = (function (_super) {
	__extends(LeaderboardListItemSkin, _super);
	function LeaderboardListItemSkin() {
		_super.call(this);
		this.skinParts = ["nicknameLabel","buyInLabel","roundAmountLabel","scoreLabel"];
		
		this.height = 66;
		this.width = 618;
		this.elementsContent = [this.nicknameLabel_i(),this.buyInLabel_i(),this.roundAmountLabel_i(),this.scoreLabel_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.nickname"],[0],this.nicknameLabel,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.buyIn"],[0],this.buyInLabel,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.roundAmount"],[0],this.roundAmountLabel,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.scoreString"],[0],this.scoreLabel,"text");
	}
	var _proto = LeaderboardListItemSkin.prototype;

	_proto.nicknameLabel_i = function () {
		var t = new eui.Label();
		this.nicknameLabel = t;
		t.left = 40;
		t.size = 22;
		t.verticalCenter = 0;
		return t;
	};
	_proto.buyInLabel_i = function () {
		var t = new eui.Label();
		this.buyInLabel = t;
		t.horizontalCenter = 40;
		t.size = 22;
		t.verticalCenter = 0;
		return t;
	};
	_proto.roundAmountLabel_i = function () {
		var t = new eui.Label();
		this.roundAmountLabel = t;
		t.horizontalCenter = 143;
		t.size = 22;
		t.verticalCenter = 0;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.horizontalCenter = 245;
		t.size = 22;
		t.verticalCenter = 0;
		return t;
	};
	return LeaderboardListItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Leaderboard/LeaderboardViewerSkin.exml'] = window.LeaderboardViewerSkin = (function (_super) {
	__extends(LeaderboardViewerSkin, _super);
	function LeaderboardViewerSkin() {
		_super.call(this);
		this.skinParts = ["avatar","leftAvatarCover","nameLabel"];
		
		this.height = 160;
		this.width = 206;
		this.elementsContent = [this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.nickname"],[0],this.nameLabel,"text");
	}
	var _proto = LeaderboardViewerSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group1_i(),this.nameLabel_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 18;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 80;
		t.width = 80;
		t.x = 45;
		t.y = 11;
		t.elementsContent = [this.avatar_i(),this.leftAvatarCover_i()];
		return t;
	};
	_proto.avatar_i = function () {
		var t = new eui.Image();
		this.avatar = t;
		t.height = 80;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "image_default_avatar_png";
		t.width = 80;
		t.x = 0;
		return t;
	};
	_proto.leftAvatarCover_i = function () {
		var t = new eui.Rect();
		this.leftAvatarCover = t;
		t.fillAlpha = 0.6;
		t.fillColor = 0xa2b7b5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.height = 24;
		t.multiline = false;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textAlign = "center";
		t.width = 200;
		t.wordWrap = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return LeaderboardViewerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/MarkSkin.exml'] = window.MarkSkin = (function (_super) {
	__extends(MarkSkin, _super);
	function MarkSkin() {
		_super.call(this);
		this.skinParts = ["signLabel"];
		
		this.height = 30;
		this.width = 30;
		this.elementsContent = [this._Rect1_i(),this.signLabel_i()];
	}
	var _proto = MarkSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0xffffff;
		t.height = 30;
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.signLabel_i = function () {
		var t = new eui.Label();
		this.signLabel = t;
		t.anchorOffsetX = 0;
		t.height = 30;
		t.size = 15;
		t.text = "SB";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 30;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return MarkSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/MenuItemSkin.exml'] = window.MenuItemSkin = (function (_super) {
	__extends(MenuItemSkin, _super);
	function MenuItemSkin() {
		_super.call(this);
		this.skinParts = ["itemLabel","arrow"];
		
		this.height = 88;
		this.width = 240;
		this.elementsContent = [this._Rect1_i(),this.itemLabel_i(),this.arrow_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.item"],[0],this.itemLabel,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.showArrow"],[0],this.arrow,"visible");
	}
	var _proto = MenuItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x021a17;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.itemLabel_i = function () {
		var t = new eui.Label();
		this.itemLabel = t;
		t.anchorOffsetX = 0;
		t.height = 88;
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 147;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.arrow_i = function () {
		var t = new eui.Image();
		this.arrow = t;
		t.height = 27;
		t.right = 22;
		t.source = "icon_menu_arrow_png";
		t.width = 16;
		t.y = 30.5;
		return t;
	};
	return MenuItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/MenuViewSkin.exml'] = window.MenuViewSkin = (function (_super) {
	__extends(MenuViewSkin, _super);
	function MenuViewSkin() {
		_super.call(this);
		this.skinParts = ["background","menuList"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.background_i(),this.menuList_i()];
	}
	var _proto = MenuViewSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.fillAlpha = 0.1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.menuList_i = function () {
		var t = new eui.List();
		this.menuList = t;
		t.height = 356;
		t.itemRendererSkinName = MenuItemSkin;
		t.width = 240;
		t.x = -240;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 2;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.item = "牌型";
		t.showArrow = "true";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.item = "站起围观";
		t.showArrow = "";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.item = "保位离桌";
		t.showArrow = "";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.item = "退出牌局";
		t.showArrow = "";
		return t;
	};
	return MenuViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/NumericKeyboard/NumericButtonSkin.exml'] = window.NumericButtonSkin = (function (_super) {
	__extends(NumericButtonSkin, _super);
	function NumericButtonSkin() {
		_super.call(this);
		this.skinParts = ["background","labelDisplay","iconDisplay"];
		
		this.height = 80;
		this.width = 128;
		this.elementsContent = [this.background_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("background","fillColor",0xa4a4a9)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = NumericButtonSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x46464e;
		t.height = 80;
		t.width = 128;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.height = 80;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 128;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	return NumericButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/NumericKeyboard/NumericKeyboardItemSkin.exml'] = window.NumericKeyboardItemSkin = (function (_super) {
	__extends(NumericKeyboardItemSkin, _super);
	function NumericKeyboardItemSkin() {
		_super.call(this);
		this.skinParts = ["button"];
		
		this.height = 80;
		this.width = 128;
		this.elementsContent = [this.button_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.number"],[0],this.button,"label");
	}
	var _proto = NumericKeyboardItemSkin.prototype;

	_proto.button_i = function () {
		var t = new eui.Button();
		this.button = t;
		t.skinName = "NumericButtonSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return NumericKeyboardItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/NumericKeyboard/NumericKeyboardSkin.exml'] = window.NumericKeyboardSkin = (function (_super) {
	__extends(NumericKeyboardSkin, _super);
	var NumericKeyboardSkin$Skin18 = 	(function (_super) {
		__extends(NumericKeyboardSkin$Skin18, _super);
		function NumericKeyboardSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NumericKeyboardSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_close_keyboard_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NumericKeyboardSkin$Skin18;
	})(eui.Skin);

	function NumericKeyboardSkin() {
		_super.call(this);
		this.skinParts = ["background","displayLabel","buttonList","zeroButton","deleteButton","closeButton","confirmButton"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.background_i(),this._Group1_i()];
	}
	var _proto = NumericKeyboardSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.fillAlpha = 0.3;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 490;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 440;
		t.elementsContent = [this._Rect1_i(),this.displayLabel_i(),this.buttonList_i(),this.zeroButton_i(),this.deleteButton_i(),this.closeButton_i(),this.confirmButton_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x1d1f2a;
		t.height = 490;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xc7c7c7;
		t.strokeWeight = 3;
		t.width = 440;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.displayLabel_i = function () {
		var t = new eui.Label();
		this.displayLabel = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "最小下注额为2";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 300;
		t.y = 50;
		return t;
	};
	_proto.buttonList_i = function () {
		var t = new eui.List();
		this.buttonList = t;
		t.bottom = 20;
		t.height = 360;
		t.itemRendererSkinName = NumericKeyboardItemSkin;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 400;
		t.x = 20;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "contentJustify";
		t.horizontalGap = 8;
		t.paddingTop = 20;
		t.verticalGap = 8;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.number = "1";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.number = "2";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.number = "3";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.number = "4";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.number = "5";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.number = "6";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.number = "7";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.number = "8";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.number = "9";
		return t;
	};
	_proto.zeroButton_i = function () {
		var t = new eui.Button();
		this.zeroButton = t;
		t.height = 80;
		t.label = "0";
		t.skinName = "NumericButtonSkin";
		t.width = 128;
		t.x = 156;
		t.y = 398;
		return t;
	};
	_proto.deleteButton_i = function () {
		var t = new eui.Button();
		this.deleteButton = t;
		t.height = 80;
		t.icon = "icon_numeric_delete_png";
		t.label = "";
		t.skinName = "NumericButtonSkin";
		t.width = 128;
		t.x = 20;
		t.y = 398;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.label = "";
		t.right = 20;
		t.top = 20;
		t.skinName = NumericKeyboardSkin$Skin18;
		return t;
	};
	_proto.confirmButton_i = function () {
		var t = new eui.Button();
		this.confirmButton = t;
		t.height = 80;
		t.label = "确定";
		t.skinName = "NumericButtonSkin";
		t.width = 128;
		t.x = 292;
		t.y = 398;
		return t;
	};
	return NumericKeyboardSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PlayerDetail/PlayerDetailSkin.exml'] = window.PlayerDetailSkin = (function (_super) {
	__extends(PlayerDetailSkin, _super);
	function PlayerDetailSkin() {
		_super.call(this);
		this.skinParts = ["background","avatarImage","nicknameLabel","bioLabel","statisticList","cardList","group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.background_i(),this.group_i()];
	}
	var _proto = PlayerDetailSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.fillAlpha = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.height = 970;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 690;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.avatarImage_i(),this.nicknameLabel_i(),this.bioLabel_i(),this.statisticList_i(),this._Label1_i(),this.cardList_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x001211;
		t.height = 970;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0x3bffde;
		t.strokeWeight = 3;
		t.width = 690;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x072927;
		t.height = 742;
		t.width = 660;
		t.x = 15;
		t.y = 206;
		return t;
	};
	_proto.avatarImage_i = function () {
		var t = new eui.Image();
		this.avatarImage = t;
		t.height = 150;
		t.source = "image_default_avatar_png";
		t.width = 150;
		t.x = 48;
		t.y = 30;
		return t;
	};
	_proto.nicknameLabel_i = function () {
		var t = new eui.Label();
		this.nicknameLabel = t;
		t.text = "Stan";
		t.x = 230;
		t.y = 60;
		return t;
	};
	_proto.bioLabel_i = function () {
		var t = new eui.Label();
		this.bioLabel = t;
		t.height = 44;
		t.size = 22;
		t.text = "签名:";
		t.textColor = 0xb8c2c0;
		t.width = 300;
		t.x = 230;
		t.y = 130;
		return t;
	};
	_proto.statisticList_i = function () {
		var t = new eui.List();
		this.statisticList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 604;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = StatisticItemSkin;
		t.width = 660;
		t.y = 206;
		t.layout = this._TileLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "left";
		t.horizontalGap = 0;
		t.orientation = "rows";
		t.paddingBottom = 0;
		t.paddingLeft = 0;
		t.paddingRight = 0;
		t.paddingTop = 30;
		t.verticalAlign = "contentJustify";
		t.verticalGap = 25;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i(),this._Object13_i(),this._Object14_i(),this._Object15_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.data = "0";
		t.title = "总局数";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.data = "0";
		t.title = "获胜局数";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.data = "0";
		t.title = "获胜率";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.data = "0";
		t.title = "总手数";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.data = "0";
		t.title = "入池率(VPIP)";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.data = "0";
		t.title = "入池胜率";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.data = "0";
		t.title = "场均带入";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.data = "0";
		t.title = "场均战绩";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.data = "0";
		t.title = "激进度(AF)";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.data = "0";
		t.title = "翻牌前加注率(PFR)";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.data = "0";
		t.title = "翻牌前再加注率(3Bet)";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.data = "0";
		t.title = "翻牌后持续下注率(CBet)";
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.data = "0";
		t.title = "摊派率";
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		t.data = "0";
		t.title = "All-In胜率";
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		t.data = "0";
		t.title = "赢过最大的池底";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "赢过最大的牌";
		t.textColor = 0xb8c2c0;
		t.x = 35;
		t.y = 870;
		return t;
	};
	_proto.cardList_i = function () {
		var t = new eui.List();
		this.cardList = t;
		t.anchorOffsetX = 0;
		t.height = 80;
		t.itemRendererSkinName = WonCardItemSkin;
		t.width = 366;
		t.x = 250;
		t.y = 842;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection2_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 18;
		return t;
	};
	_proto._ArrayCollection2_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object16_i(),this._Object17_i(),this._Object18_i(),this._Object19_i(),this._Object20_i()];
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		t.cardName = "1";
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		t.cardName = "null";
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		t.cardName = "null";
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		t.cardName = "null";
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		t.cardName = "null";
		return t;
	};
	return PlayerDetailSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PlayerDetail/StatisticdItemSkin.exml'] = window.StatisticItemSkin = (function (_super) {
	__extends(StatisticItemSkin, _super);
	function StatisticItemSkin() {
		_super.call(this);
		this.skinParts = ["titleLabel","dataLabel"];
		
		this.height = 120;
		this.width = 220;
		this.elementsContent = [this.titleLabel_i(),this.dataLabel_i(),this._Rect1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.title"],[0],this.titleLabel,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.data"],[0],this.dataLabel,"text");
	}
	var _proto = StatisticItemSkin.prototype;

	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.anchorOffsetX = 0;
		t.height = 48;
		t.size = 24;
		t.textColor = 0xb8c2c0;
		t.width = 148;
		t.x = 20;
		t.y = 15;
		return t;
	};
	_proto.dataLabel_i = function () {
		var t = new eui.Label();
		this.dataLabel = t;
		t.anchorOffsetX = 0;
		t.size = 32;
		t.textColor = 0xffffff;
		t.width = 158;
		t.x = 20;
		t.y = 65;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x08372c;
		t.height = 2;
		t.width = 220;
		t.x = 0;
		t.y = 118;
		return t;
	};
	return StatisticItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PlayerDetail/WonCardItemSkin.exml'] = window.WonCardItemSkin = (function (_super) {
	__extends(WonCardItemSkin, _super);
	function WonCardItemSkin() {
		_super.call(this);
		this.skinParts = ["cardImage"];
		
		this.height = 80;
		this.width = 54;
		this.elementsContent = [this.cardImage_i()];
	}
	var _proto = WonCardItemSkin.prototype;

	_proto.cardImage_i = function () {
		var t = new eui.Image();
		this.cardImage = t;
		t.height = 80;
		t.source = "poker_back_png";
		t.width = 54;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return WonCardItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PlayerSkin.exml'] = window.PlayerSkin = (function (_super) {
	__extends(PlayerSkin, _super);
	function PlayerSkin() {
		_super.call(this);
		this.skinParts = ["winnerAnimation","avatarImage","nameLabel","scoreLabel","countdownCover","timerLabel","progressBorder","winnerBorder","foldCover"];
		
		this.height = 167;
		this.width = 100;
		this.winnerAnimation_i();
		this.elementsContent = [this.avatarImage_i(),this.nameLabel_i(),this._Group1_i(),this.countdownCover_i(),this.timerLabel_i(),this.progressBorder_i(),this.winnerBorder_i(),this.foldCover_i()];
		
		eui.Binding.$bindProperties(this, ["winnerBorder"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object1,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [1],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
	}
	var _proto = PlayerSkin.prototype;

	_proto.winnerAnimation_i = function () {
		var t = new egret.tween.TweenGroup();
		this.winnerAnimation = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._Wait1_i(),this._Set2_i(),this._Wait2_i(),this._Set3_i(),this._Wait3_i(),this._Set4_i(),this._Wait4_i(),this._Set5_i(),this._Wait5_i(),this._Set6_i(),this._Wait6_i(),this._Set7_i(),this._Wait7_i(),this._Set8_i(),this._Wait8_i(),this._Set9_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._Wait1_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Wait2_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Wait3_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._Wait4_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Wait5_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._Wait6_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._Wait7_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._Wait8_i = function () {
		var t = new egret.tween.Wait();
		t.duration = 250;
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto.avatarImage_i = function () {
		var t = new eui.Image();
		this.avatarImage = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "image_default_avatar_png";
		t.width = 100;
		t.y = 31;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.size = 22;
		t.text = "Stan";
		t.textAlign = "center";
		t.textColor = 0xbad7d5;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 32;
		t.width = 100;
		t.x = 0;
		t.elementsContent = [this._Rect1_i(),this.scoreLabel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x012220;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.height = 32;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "25000";
		t.textAlign = "center";
		t.textColor = 0xe6ecec;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.countdownCover_i = function () {
		var t = new eui.Rect();
		this.countdownCover = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 100;
		t.visible = false;
		t.width = 100;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto.timerLabel_i = function () {
		var t = new eui.Label();
		this.timerLabel = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "15";
		t.textAlign = "center";
		t.textColor = 0x86f210;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 100;
		return t;
	};
	_proto.progressBorder_i = function () {
		var t = new eui.Image();
		this.progressBorder = t;
		t.height = 100;
		t.source = "image_border_yellow_png";
		t.visible = false;
		t.width = 100;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto.winnerBorder_i = function () {
		var t = new eui.Image();
		this.winnerBorder = t;
		t.alpha = 0;
		t.height = 100;
		t.source = "image_border_yellow_png";
		t.visible = false;
		t.width = 100;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto.foldCover_i = function () {
		var t = new eui.Rect();
		this.foldCover = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 100;
		t.visible = false;
		t.width = 100;
		t.x = 0;
		t.y = 31;
		return t;
	};
	return PlayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PotItemSkin.exml'] = window.PotItemSkin = (function (_super) {
	__extends(PotItemSkin, _super);
	function PotItemSkin() {
		_super.call(this);
		this.skinParts = ["amountLabel"];
		
		this.height = 36;
		this.width = 144;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.amountLabel_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.amount"],[0],this.amountLabel,"text");
	}
	var _proto = PotItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 36;
		t.ellipseWidth = 36;
		t.fillAlpha = 0.7;
		t.height = 36;
		t.width = 144;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "icon_side_pot_png";
		t.verticalCenter = -4;
		t.width = 31;
		t.x = 0;
		return t;
	};
	_proto.amountLabel_i = function () {
		var t = new eui.Label();
		this.amountLabel = t;
		t.anchorOffsetX = 0;
		t.height = 36;
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 102;
		t.x = 32;
		t.y = 0;
		return t;
	};
	return PotItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/GameHistory/ReviewboardPlayerPositionIconSkin.exml'] = window.ReviewboardPlayerPositionIconSkin = (function (_super) {
	__extends(ReviewboardPlayerPositionIconSkin, _super);
	function ReviewboardPlayerPositionIconSkin() {
		_super.call(this);
		this.skinParts = ["positionLabel"];
		
		this.height = 28;
		this.width = 54;
		this.elementsContent = [this._Rect1_i(),this.positionLabel_i()];
	}
	var _proto = ReviewboardPlayerPositionIconSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 20;
		t.fillColor = 0x454e4e;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.positionLabel_i = function () {
		var t = new eui.Label();
		this.positionLabel = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "UTG";
		t.textAlign = "center";
		t.textColor = 0x999d9d;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return ReviewboardPlayerPositionIconSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/GameHistory/ReviewboardGameHistorySettlementItemSkin.exml'] = window.ReviewboardGameHistorySettlementItemSkin = (function (_super) {
	__extends(ReviewboardGameHistorySettlementItemSkin, _super);
	function ReviewboardGameHistorySettlementItemSkin() {
		_super.call(this);
		this.skinParts = ["playerPositionIcon","playerNameLabel","playerStateLabel","handPokersList","boardPokersList","playerSettlementLabel"];
		
		this.height = 145;
		this.width = 620;
		this.elementsContent = [this.playerPositionIcon_i(),this._Group1_i(),this.handPokersList_i(),this.boardPokersList_i(),this.playerSettlementLabel_i()];
	}
	var _proto = ReviewboardGameHistorySettlementItemSkin.prototype;

	_proto.playerPositionIcon_i = function () {
		var t = new ReviewboardPlayerPositionIcon();
		this.playerPositionIcon = t;
		t.left = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReviewboardPlayerPositionIconSkin";
		t.top = 30;
		t.x = 26;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.left = 100;
		t.top = 6;
		t.width = 200;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.playerNameLabel_i(),this.playerStateLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "left";
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.playerNameLabel_i = function () {
		var t = new eui.Label();
		this.playerNameLabel = t;
		t.size = 24;
		t.text = "测试";
		t.textColor = 0xb8c2c0;
		t.x = 55;
		t.y = 26;
		return t;
	};
	_proto.playerStateLabel_i = function () {
		var t = new eui.Label();
		this.playerStateLabel = t;
		t.size = 24;
		t.text = "(弃牌)";
		t.textColor = 0xB8C2C0;
		t.x = 65;
		t.y = 36;
		return t;
	};
	_proto.handPokersList_i = function () {
		var t = new eui.List();
		this.handPokersList = t;
		t.bottom = 0;
		t.height = 80;
		t.left = 52;
		t.width = 120;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 6;
		t.orientation = "rows";
		t.requestedRowCount = 1;
		t.rowHeight = 80;
		t.verticalAlign = "middle";
		t.verticalGap = 0;
		return t;
	};
	_proto.boardPokersList_i = function () {
		var t = new eui.List();
		this.boardPokersList = t;
		t.bottom = 0;
		t.height = 80;
		t.left = 211;
		t.width = 300;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "left";
		t.orientation = "rows";
		t.requestedRowCount = 1;
		t.rowHeight = 80;
		t.verticalAlign = "middle";
		t.verticalGap = 0;
		return t;
	};
	_proto.playerSettlementLabel_i = function () {
		var t = new eui.Label();
		this.playerSettlementLabel = t;
		t.right = 30;
		t.size = 24;
		t.text = "200";
		t.verticalCenter = 28;
		return t;
	};
	return ReviewboardGameHistorySettlementItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/GameHistory/ReviewboardGameSectionHeaderSkin.exml'] = window.ReviewboardGameSectionHeaderSkin = (function (_super) {
	__extends(ReviewboardGameSectionHeaderSkin, _super);
	function ReviewboardGameSectionHeaderSkin() {
		_super.call(this);
		this.skinParts = ["chineseNameLabel","englishNameLabel","boardPokerList","potStackLabel"];
		
		this.height = 100;
		this.width = 620;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this.boardPokerList_i(),this.potStackLabel_i()];
	}
	var _proto = ReviewboardGameSectionHeaderSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x021b19;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 100;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.chineseNameLabel_i(),this.englishNameLabel_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 2;
		t.horizontalAlign = "left";
		t.paddingLeft = 31;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.chineseNameLabel_i = function () {
		var t = new eui.Label();
		this.chineseNameLabel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "翻牌前";
		t.x = 55;
		t.y = 30;
		return t;
	};
	_proto.englishNameLabel_i = function () {
		var t = new eui.Label();
		this.englishNameLabel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "Pre-Flop";
		t.x = 65;
		t.y = 40;
		return t;
	};
	_proto.boardPokerList_i = function () {
		var t = new eui.List();
		this.boardPokerList = t;
		t.anchorOffsetX = 0;
		t.height = 100;
		t.left = 171;
		t.verticalCenter = 0;
		t.width = 320;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "left";
		t.horizontalGap = 10;
		t.orientation = "rows";
		t.requestedRowCount = 1;
		t.rowHeight = 100;
		t.verticalAlign = "middle";
		t.verticalGap = 0;
		return t;
	};
	_proto.potStackLabel_i = function () {
		var t = new eui.Label();
		this.potStackLabel = t;
		t.right = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "7";
		t.verticalCenter = 0;
		return t;
	};
	return ReviewboardGameSectionHeaderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/GameHistory/ReviewboardPlayerActionIconSkin.exml'] = window.ReviewboardPlayerActionIconSkin = (function (_super) {
	__extends(ReviewboardPlayerActionIconSkin, _super);
	function ReviewboardPlayerActionIconSkin() {
		_super.call(this);
		this.skinParts = ["background","actionAbbrSymbolLabel","actionValueLabel"];
		
		this.height = 28;
		this.width = 100;
		this.elementsContent = [this._Group1_i(),this.actionValueLabel_i()];
	}
	var _proto = ReviewboardPlayerActionIconSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 28;
		t.width = 34;
		t.x = 0;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.background_i(),this.actionAbbrSymbolLabel_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.ellipseHeight = 10;
		t.ellipseWidth = 20;
		t.fillColor = 0x7c7e7e;
		t.height = 28;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 34;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.actionAbbrSymbolLabel_i = function () {
		var t = new eui.Label();
		this.actionAbbrSymbolLabel = t;
		t.height = 20;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "F";
		t.textAlign = "center";
		t.textColor = 0x333636;
		t.verticalCenter = 0;
		t.width = 34;
		return t;
	};
	_proto.actionValueLabel_i = function () {
		var t = new eui.Label();
		this.actionValueLabel = t;
		t.left = 40;
		t.size = 24;
		t.text = "20";
		t.textColor = 0xb8c2c0;
		t.verticalCenter = 0;
		return t;
	};
	return ReviewboardPlayerActionIconSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/GameHistory/ReviewboardPlayerActionViewSkin.exml'] = window.ReviewboardPlayerActionViewSkin = (function (_super) {
	__extends(ReviewboardPlayerActionViewSkin, _super);
	function ReviewboardPlayerActionViewSkin() {
		_super.call(this);
		this.skinParts = ["positionIcon","nameLabel","actionIcon","stackLabel"];
		
		this.height = 66;
		this.width = 620;
		this.elementsContent = [this.positionIcon_i(),this.nameLabel_i(),this._Group1_i(),this.stackLabel_i()];
	}
	var _proto = ReviewboardPlayerActionViewSkin.prototype;

	_proto.positionIcon_i = function () {
		var t = new ReviewboardPlayerPositionIcon();
		this.positionIcon = t;
		t.left = 30;
		t.skinName = "ReviewboardPlayerPositionIconSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.left = 103;
		t.size = 24;
		t.text = "设置姓名";
		t.textColor = 0xb8c2c0;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 66;
		t.left = 340;
		t.width = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.actionIcon_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.actionIcon_i = function () {
		var t = new ReviewboardPlayerActionIcon();
		this.actionIcon = t;
		t.skinName = "ReviewboardPlayerActionIconSkin";
		t.x = 20;
		t.y = 14;
		return t;
	};
	_proto.stackLabel_i = function () {
		var t = new eui.Label();
		this.stackLabel = t;
		t.right = 30;
		t.size = 24;
		t.text = "2000";
		t.textColor = 0xb8c2c0;
		t.verticalCenter = 0;
		return t;
	};
	return ReviewboardPlayerActionViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/ReviewboardPokerSkin.exml'] = window.ReviewboardPokerSkin = (function (_super) {
	__extends(ReviewboardPokerSkin, _super);
	function ReviewboardPokerSkin() {
		_super.call(this);
		this.skinParts = ["image"];
		
		this.height = 80;
		this.width = 54;
		this.elementsContent = [this.image_i()];
	}
	var _proto = ReviewboardPokerSkin.prototype;

	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.percentHeight = 100;
		t.source = "poker_back_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ReviewboardPokerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/ReviewboardTabbarItemSkin.exml'] = window.ReviewboardTabbarItemSkin = (function (_super) {
	__extends(ReviewboardTabbarItemSkin, _super);
	function ReviewboardTabbarItemSkin() {
		_super.call(this);
		this.skinParts = ["titleLabel"];
		
		this.height = 53;
		this.width = 310;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.titleLabel_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillColor",0x021c1a),
					new eui.SetProperty("_Image1","source","img_triangle_arrow@2x_png"),
					new eui.SetProperty("titleLabel","textColor",0x6bfffd)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.titleLabel,"text");
	}
	var _proto = ReviewboardTabbarItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0x2d5350;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = -10;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.horizontalCenter = 0;
		t.textColor = 0xb8c2c0;
		t.verticalCenter = 0;
		return t;
	};
	return ReviewboardTabbarItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/Reviewboard/SettlementHistory/ReviewboardSettlementItemSkin.exml'] = window.ReviewboardSettlementItemSkin = (function (_super) {
	__extends(ReviewboardSettlementItemSkin, _super);
	function ReviewboardSettlementItemSkin() {
		_super.call(this);
		this.skinParts = ["playerNameLabel","playerFoldLabel","playerAvatarImage","pokerTypeLabel","playerSettlementLabel","communityPokerList","holePokerList"];
		
		this.height = 160;
		this.width = 620;
		this.elementsContent = [this._Group1_i(),this.playerAvatarImage_i(),this._Group2_i(),this.communityPokerList_i(),this.holePokerList_i()];
	}
	var _proto = ReviewboardSettlementItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.left = 30;
		t.verticalCenter = -50;
		t.width = 220;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.playerNameLabel_i(),this.playerFoldLabel_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "left";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.playerNameLabel_i = function () {
		var t = new eui.Label();
		this.playerNameLabel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "稻城亚丁景区";
		t.textColor = 0xb8c2c0;
		t.x = 23;
		t.y = 2;
		return t;
	};
	_proto.playerFoldLabel_i = function () {
		var t = new eui.Label();
		this.playerFoldLabel = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "(弃牌)";
		t.textColor = 0xB8C2C0;
		t.x = 43;
		t.y = 22;
		return t;
	};
	_proto.playerAvatarImage_i = function () {
		var t = new eui.Image();
		this.playerAvatarImage = t;
		t.height = 82;
		t.left = 30;
		t.source = "image_default_avatar_png";
		t.verticalCenter = 16;
		t.width = 82;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 30;
		t.right = 30;
		t.verticalCenter = -50;
		t.width = 310;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.pokerTypeLabel_i(),this.playerSettlementLabel_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.pokerTypeLabel_i = function () {
		var t = new eui.Label();
		this.pokerTypeLabel = t;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "-";
		t.textColor = 0xb8c2c0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.playerSettlementLabel_i = function () {
		var t = new eui.Label();
		this.playerSettlementLabel = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "+200";
		t.textColor = 0xB8C2C0;
		t.verticalCenter = 0;
		t.x = 235;
		t.y = -31;
		return t;
	};
	_proto.communityPokerList_i = function () {
		var t = new eui.List();
		this.communityPokerList = t;
		t.height = 90;
		t.right = 30;
		t.verticalCenter = 16;
		t.width = 310;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "left";
		t.horizontalGap = 10;
		t.orientation = "rows";
		t.requestedRowCount = 1;
		t.rowHeight = 90;
		t.verticalAlign = "middle";
		t.verticalGap = 0;
		return t;
	};
	_proto.holePokerList_i = function () {
		var t = new eui.List();
		this.holePokerList = t;
		t.height = 90;
		t.horizontalCenter = -127;
		t.verticalCenter = 16;
		t.width = 118;
		t.layout = this._TileLayout2_i();
		return t;
	};
	_proto._TileLayout2_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "left";
		t.horizontalGap = 10;
		t.orientation = "rows";
		t.requestedRowCount = 1;
		t.rowHeight = 90;
		t.verticalAlign = "middle";
		t.verticalGap = 0;
		return t;
	};
	return ReviewboardSettlementItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/ScoreboardSkin.exml'] = window.ScoreboardSkin = (function (_super) {
	__extends(ScoreboardSkin, _super);
	function ScoreboardSkin() {
		_super.call(this);
		this.skinParts = ["icon","chipLabel"];
		
		this.height = 26;
		this.width = 100;
		this.elementsContent = [this._Rect1_i(),this.icon_i(),this.chipLabel_i()];
	}
	var _proto = ScoreboardSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 26;
		t.ellipseWidth = 26;
		t.fillAlpha = 0.5;
		t.height = 26;
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.source = "icon_player_chip_png";
		t.verticalCenter = 0;
		t.width = 26;
		t.x = 0;
		return t;
	};
	_proto.chipLabel_i = function () {
		var t = new eui.Label();
		this.chipLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.size = 22;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 65;
		t.x = 27;
		t.y = 0;
		return t;
	};
	return ScoreboardSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/SeatViewSkin.exml'] = window.SeatViewSkin = (function (_super) {
	__extends(SeatViewSkin, _super);
	function SeatViewSkin() {
		_super.call(this);
		this.skinParts = ["bounce","labelDisplay","icon"];
		
		this.height = 80;
		this.width = 80;
		this.bounce_i();
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i(),this.icon_i()];
		
		eui.Binding.$bindProperties(this, ["icon"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [-18],[],this._Object2,"y");
	}
	var _proto = SeatViewSkin.prototype;

	_proto.bounce_i = function () {
		var t = new egret.tween.TweenGroup();
		this.bounce = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillAlpha = 0;
		t.height = 80;
		t.strokeColor = 0x118079;
		t.strokeWeight = 2;
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.height = 80;
		t.size = 25;
		t.text = "label";
		t.textAlign = "center";
		t.textColor = 0x118079;
		t.verticalAlign = "middle";
		t.width = 80;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.height = 34;
		t.horizontalCenter = 0;
		t.source = "icon_sit_down_png";
		t.width = 46;
		t.y = -18;
		return t;
	};
	return SeatViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LaunchSkins/InputPhoneNumberSkin.exml'] = window.InputPhoneNumberSkin = (function (_super) {
	__extends(InputPhoneNumberSkin, _super);
	var InputPhoneNumberSkin$Skin19 = 	(function (_super) {
		__extends(InputPhoneNumberSkin$Skin19, _super);
		function InputPhoneNumberSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InputPhoneNumberSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_next_step_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InputPhoneNumberSkin$Skin19;
	})(eui.Skin);

	function InputPhoneNumberSkin() {
		_super.call(this);
		this.skinParts = ["background","phoneNumberInput","nextButton"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.background_i(),this._Group1_i()];
	}
	var _proto = InputPhoneNumberSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 360;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 550;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this._Label2_i(),this.phoneNumberInput_i(),this.nextButton_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xffffff;
		t.height = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "手机号";
		t.textColor = 0x000000;
		t.x = 227;
		t.y = 33.85;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "请输入您的手机号";
		t.textColor = 0x000000;
		t.x = 36;
		t.y = 101;
		return t;
	};
	_proto.phoneNumberInput_i = function () {
		var t = new eui.TextInput();
		this.phoneNumberInput = t;
		t.height = 68;
		t.skinName = "LoginTextInputSkin";
		t.width = 480;
		t.x = 36;
		t.y = 160;
		return t;
	};
	_proto.nextButton_i = function () {
		var t = new eui.Button();
		this.nextButton = t;
		t.label = "";
		t.x = 158;
		t.y = 250;
		t.skinName = InputPhoneNumberSkin$Skin19;
		return t;
	};
	return InputPhoneNumberSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LaunchSkins/InputPinSkin.exml'] = window.InputPinSkin = (function (_super) {
	__extends(InputPinSkin, _super);
	function InputPinSkin() {
		_super.call(this);
		this.skinParts = ["background","createButton","pinInput","joinButton"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.background_i(),this._Group1_i()];
	}
	var _proto = InputPinSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 360;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 550;
		t.elementsContent = [this._Rect1_i(),this.createButton_i(),this._Label1_i(),this._Label2_i(),this.pinInput_i(),this.joinButton_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xFFFFFF;
		t.height = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.createButton_i = function () {
		var t = new eui.Button();
		this.createButton = t;
		t.label = "我的";
		t.skinName = "ChatSendButtonSkin";
		t.x = 67;
		t.y = 259;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "房间号";
		t.textColor = 0x000000;
		t.x = 227;
		t.y = 33.85;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "请输入您的房间号";
		t.textColor = 0x000000;
		t.x = 36;
		t.y = 101;
		return t;
	};
	_proto.pinInput_i = function () {
		var t = new eui.TextInput();
		this.pinInput = t;
		t.height = 68;
		t.skinName = "LoginTextInputSkin";
		t.width = 480;
		t.x = 36;
		t.y = 160;
		return t;
	};
	_proto.joinButton_i = function () {
		var t = new eui.Button();
		this.joinButton = t;
		t.label = "加入";
		t.skinName = "ChatSendButtonSkin";
		t.x = 323;
		t.y = 259;
		return t;
	};
	return InputPinSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LaunchSkins/TimerButtonSkin.exml'] = window.TimerButtonSkin = (function (_super) {
	__extends(TimerButtonSkin, _super);
	function TimerButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 46;
		this.width = 114;
		this.elementsContent = [this._Rect1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","fillAlpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = TimerButtonSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 0;
		t.fillColor = 0x1fb6fb;
		t.height = 46;
		t.strokeColor = 0x1fb6fb;
		t.strokeWeight = 2;
		t.width = 114;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.height = 24;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "重新获取";
		t.textAlign = "center";
		t.textColor = 0x1fb6fb;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	return TimerButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LaunchSkins/InputVerificationCodeSkin.exml'] = window.InputVerificationCodeSkin = (function (_super) {
	__extends(InputVerificationCodeSkin, _super);
	var InputVerificationCodeSkin$Skin20 = 	(function (_super) {
		__extends(InputVerificationCodeSkin$Skin20, _super);
		function InputVerificationCodeSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = InputVerificationCodeSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_login_confirm_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return InputVerificationCodeSkin$Skin20;
	})(eui.Skin);

	function InputVerificationCodeSkin() {
		_super.call(this);
		this.skinParts = ["background","confirmButton","phoneNumberLabel","codeInput","regainButton"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.background_i(),this._Group1_i()];
	}
	var _proto = InputVerificationCodeSkin.prototype;

	_proto.background_i = function () {
		var t = new eui.Rect();
		this.background = t;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 400;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 550;
		t.elementsContent = [this._Rect1_i(),this._Label1_i(),this.confirmButton_i(),this._Label2_i(),this.phoneNumberLabel_i(),this._Label3_i(),this.codeInput_i(),this.regainButton_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xFFFFFF;
		t.height = 400;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 0;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "已发送到:";
		t.textColor = 0x000000;
		t.x = 38;
		t.y = 111;
		return t;
	};
	_proto.confirmButton_i = function () {
		var t = new eui.Button();
		this.confirmButton = t;
		t.label = "";
		t.x = 158;
		t.y = 290;
		t.skinName = InputVerificationCodeSkin$Skin20;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "验证码已发送";
		t.textColor = 0x000000;
		t.x = 180;
		t.y = 33.85;
		return t;
	};
	_proto.phoneNumberLabel_i = function () {
		var t = new eui.Label();
		this.phoneNumberLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.text = "000000";
		t.textColor = 0x000000;
		t.width = 320;
		t.x = 180;
		t.y = 111;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.text = "请输入您收到的验证码";
		t.textColor = 0x000000;
		t.x = 36.5;
		t.y = 150;
		return t;
	};
	_proto.codeInput_i = function () {
		var t = new eui.TextInput();
		this.codeInput = t;
		t.height = 68;
		t.skinName = "LoginTextInputSkin";
		t.width = 480;
		t.x = 35;
		t.y = 200;
		return t;
	};
	_proto.regainButton_i = function () {
		var t = new eui.Button();
		this.regainButton = t;
		t.height = 46;
		t.label = "重新获取";
		t.skinName = "TimerButtonSkin";
		t.width = 114;
		t.x = 386;
		t.y = 211;
		return t;
	};
	return InputVerificationCodeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LaunchSkins/LaunchSkin.exml'] = window.LaunchSkin = (function (_super) {
	__extends(LaunchSkin, _super);
	var LaunchSkin$Skin21 = 	(function (_super) {
		__extends(LaunchSkin$Skin21, _super);
		function LaunchSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LaunchSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_phone_login_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LaunchSkin$Skin21;
	})(eui.Skin);

	var LaunchSkin$Skin22 = 	(function (_super) {
		__extends(LaunchSkin$Skin22, _super);
		function LaunchSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LaunchSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_login_by_visitor_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LaunchSkin$Skin22;
	})(eui.Skin);

	function LaunchSkin() {
		_super.call(this);
		this.skinParts = ["loginButton","visitorButton","buttonGroup","displayLabel"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.buttonGroup_i(),this.displayLabel_i()];
	}
	var _proto = LaunchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "bg_loading_jpg";
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.buttonGroup_i = function () {
		var t = new eui.Group();
		this.buttonGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 415.15;
		t.horizontalCenter = 0;
		t.width = 487.88;
		t.y = 718;
		t.elementsContent = [this.loginButton_i(),this.visitorButton_i()];
		return t;
	};
	_proto.loginButton_i = function () {
		var t = new eui.Button();
		this.loginButton = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 93;
		t.y = 277.0000000000001;
		t.skinName = LaunchSkin$Skin21;
		return t;
	};
	_proto.visitorButton_i = function () {
		var t = new eui.Button();
		this.visitorButton = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 93;
		t.y = 125.29999999999995;
		t.skinName = LaunchSkin$Skin22;
		return t;
	};
	_proto.displayLabel_i = function () {
		var t = new eui.Label();
		this.displayLabel = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "正在进入房间...";
		t.textAlign = "center";
		t.visible = false;
		t.width = 500;
		t.y = 700;
		return t;
	};
	return LaunchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoadingSkins/LoadingSkin.exml'] = window.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["loadingLabel","progressBar"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.loadingLabel_i(),this.progressBar_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "bg_loading_jpg";
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.loadingLabel_i = function () {
		var t = new eui.Label();
		this.loadingLabel = t;
		t.horizontalCenter = 0;
		t.text = "游戏加载中... 0%";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.percentWidth = 100;
		t.y = 973;
		return t;
	};
	_proto.progressBar_i = function () {
		var t = new eui.ProgressBar();
		this.progressBar = t;
		t.direction = "btt";
		t.height = 132;
		t.horizontalCenter = 0;
		t.maximum = 100;
		t.minimum = 0;
		t.skinName = "LoadingProgress";
		t.value = 0;
		t.visible = false;
		t.width = 112;
		t.y = 820;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);