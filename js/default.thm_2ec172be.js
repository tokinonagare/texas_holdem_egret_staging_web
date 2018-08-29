
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
	var MessageAlertSkin$Skin1 = 	(function (_super) {
		__extends(MessageAlertSkin$Skin1, _super);
		function MessageAlertSkin$Skin1() {
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
		var _proto = MessageAlertSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_alert_confirm_png";
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
		return MessageAlertSkin$Skin1;
	})(eui.Skin);

	function MessageAlertSkin() {
		_super.call(this);
		this.skinParts = ["confirmButton","messageLabel"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.confirmButton_i(),this.messageLabel_i()];
	}
	var _proto = MessageAlertSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.7;
		t.height = 13347;
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
	_proto.confirmButton_i = function () {
		var t = new eui.Button();
		this.confirmButton = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "";
		t.width = 224;
		t.x = 263;
		t.y = 712;
		t.skinName = MessageAlertSkin$Skin1;
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
	return MessageAlertSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Components/RaiseSliderSkin.exml'] = window.RaiseSliderSkin = (function (_super) {
	__extends(RaiseSliderSkin, _super);
	function RaiseSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","dashboardLabel","thumb"];
		
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
		t.width = 120;
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
		t.elementsContent = [this._Image1_i(),this.dashboardLabel_i()];
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
	return RaiseSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PlayGameButtonGroupSkin.exml'] = window.PlayGameButtonGroupSkin = (function (_super) {
	__extends(PlayGameButtonGroupSkin, _super);
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
					])
			];
		}
		var _proto = PlayGameButtonGroupSkin$Skin2.prototype;

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
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_check_disabled_png")
					])
			];
		}
		var _proto = PlayGameButtonGroupSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_check_png";
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
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_call_disabled_png")
					])
			];
		}
		var _proto = PlayGameButtonGroupSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_call_png";
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
		return PlayGameButtonGroupSkin$Skin6;
	})(eui.Skin);

	function PlayGameButtonGroupSkin() {
		_super.call(this);
		this.skinParts = ["foldButton","checkButton","callButton","raiseButton","allInButton"];
		
		this.height = 320;
		this.width = 750;
		this.elementsContent = [this.foldButton_i(),this.checkButton_i(),this.callButton_i(),this.raiseButton_i(),this.allInButton_i()];
	}
	var _proto = PlayGameButtonGroupSkin.prototype;

	_proto.foldButton_i = function () {
		var t = new eui.Button();
		this.foldButton = t;
		t.label = "";
		t.left = 120;
		t.y = 150;
		t.skinName = PlayGameButtonGroupSkin$Skin2;
		return t;
	};
	_proto.checkButton_i = function () {
		var t = new eui.Button();
		this.checkButton = t;
		t.label = "";
		t.right = 120;
		t.y = 150;
		t.skinName = PlayGameButtonGroupSkin$Skin3;
		return t;
	};
	_proto.callButton_i = function () {
		var t = new eui.Button();
		this.callButton = t;
		t.enabled = true;
		t.label = "";
		t.right = 120;
		t.y = 150;
		t.skinName = PlayGameButtonGroupSkin$Skin4;
		return t;
	};
	_proto.raiseButton_i = function () {
		var t = new eui.Button();
		this.raiseButton = t;
		t.label = "";
		t.x = 314;
		t.y = 10;
		t.skinName = PlayGameButtonGroupSkin$Skin5;
		return t;
	};
	_proto.allInButton_i = function () {
		var t = new eui.Button();
		this.allInButton = t;
		t.label = "";
		t.x = 314;
		t.y = 10;
		t.skinName = PlayGameButtonGroupSkin$Skin6;
		return t;
	};
	return PlayGameButtonGroupSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/RaiseSelectorSkin.exml'] = window.RaiseSelectorSkin = (function (_super) {
	__extends(RaiseSelectorSkin, _super);
	var RaiseSelectorSkin$Skin7 = 	(function (_super) {
		__extends(RaiseSelectorSkin$Skin7, _super);
		function RaiseSelectorSkin$Skin7() {
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
		var _proto = RaiseSelectorSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
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

	function RaiseSelectorSkin() {
		_super.call(this);
		this.skinParts = ["background","confirmButton","dashboardButton","raiseSlider"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.background_i(),this.confirmButton_i(),this.dashboardButton_i(),this._Image1_i(),this.raiseSlider_i()];
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
		t.y = 820;
		t.skinName = RaiseSelectorSkin$Skin7;
		return t;
	};
	_proto.dashboardButton_i = function () {
		var t = new eui.Button();
		this.dashboardButton = t;
		t.label = "0";
		t.x = 313;
		t.y = 310;
		t.skinName = RaiseSelectorSkin$Skin8;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.source = "icon_raise_slider_arrow_png";
		t.width = 34;
		t.x = 356;
		t.y = 800;
		return t;
	};
	_proto.raiseSlider_i = function () {
		var t = new RaiseSlider();
		this.raiseSlider = t;
		t.height = 430;
		t.skinName = "RaiseSliderSkin";
		t.width = 120;
		t.x = 313;
		t.y = 358;
		return t;
	};
	return RaiseSelectorSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/GameSkin.exml'] = window.GameSkin = (function (_super) {
	__extends(GameSkin, _super);
	var GameSkin$Skin9 = 	(function (_super) {
		__extends(GameSkin$Skin9, _super);
		function GameSkin$Skin9() {
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
		var _proto = GameSkin$Skin9.prototype;

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
		return GameSkin$Skin9;
	})(eui.Skin);

	var GameSkin$Skin10 = 	(function (_super) {
		__extends(GameSkin$Skin10, _super);
		function GameSkin$Skin10() {
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
		var _proto = GameSkin$Skin10.prototype;

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
		return GameSkin$Skin10;
	})(eui.Skin);

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
			t.source = "btn_close_png";
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

	function GameSkin() {
		_super.call(this);
		this.skinParts = ["talkButton","microphoneButton","communityCardList","startGameButton","pinLabel","cardTypeLabel","mainPotLabel","potsList","closeButton","playGameButtonGroup","raiseSelector"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.talkButton_i(),this.microphoneButton_i(),this.communityCardList_i(),this.startGameButton_i(),this.pinLabel_i(),this.cardTypeLabel_i(),this.mainPotLabel_i(),this.potsList_i(),this.closeButton_i(),this.playGameButtonGroup_i(),this.raiseSelector_i()];
	}
	var _proto = GameSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "bg_game_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.talkButton_i = function () {
		var t = new eui.Button();
		this.talkButton = t;
		t.bottom = 20;
		t.label = "";
		t.left = 136;
		t.visible = false;
		t.skinName = GameSkin$Skin9;
		return t;
	};
	_proto.microphoneButton_i = function () {
		var t = new eui.Button();
		this.microphoneButton = t;
		t.bottom = 20;
		t.label = "";
		t.right = 136;
		t.visible = false;
		t.skinName = GameSkin$Skin10;
		return t;
	};
	_proto.communityCardList_i = function () {
		var t = new eui.List();
		this.communityCardList = t;
		t.height = 130;
		t.width = 500;
		t.x = 125;
		t.y = 690;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 12;
		t.horizontalAlign = "contentJustify";
		t.verticalAlign = "contentJustify";
		return t;
	};
	_proto.startGameButton_i = function () {
		var t = new eui.Button();
		this.startGameButton = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.visible = false;
		t.y = 820;
		t.skinName = GameSkin$Skin11;
		return t;
	};
	_proto.pinLabel_i = function () {
		var t = new eui.Label();
		this.pinLabel = t;
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "房间号: 000000000";
		t.textAlign = "center";
		t.width = 300;
		t.y = 475;
		return t;
	};
	_proto.cardTypeLabel_i = function () {
		var t = new eui.Label();
		this.cardTypeLabel = t;
		t.text = "皇家同花顺";
		t.textAlign = "center";
		t.textColor = 0xffe9b7;
		t.width = 200;
		t.x = 275;
		t.y = 1290;
		return t;
	};
	_proto.mainPotLabel_i = function () {
		var t = new eui.Label();
		this.mainPotLabel = t;
		t.text = "底池: 0";
		t.textAlign = "center";
		t.textColor = 0xb4f0df;
		t.width = 200;
		t.x = 275;
		t.y = 505;
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
		t.y = 540;
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
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.label = "";
		t.x = 650;
		t.y = 40;
		t.skinName = GameSkin$Skin12;
		return t;
	};
	_proto.playGameButtonGroup_i = function () {
		var t = new PlayGameButtonGroup();
		this.playGameButtonGroup = t;
		t.height = 260;
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
	return GameSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/CardItemSkin.exml'] = window.CardItemSkin = (function (_super) {
	__extends(CardItemSkin, _super);
	function CardItemSkin() {
		_super.call(this);
		this.skinParts = ["cardImage"];
		
		this.height = 130;
		this.width = 90;
		this.elementsContent = [this.cardImage_i()];
	}
	var _proto = CardItemSkin.prototype;

	_proto.cardImage_i = function () {
		var t = new eui.Image();
		this.cardImage = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 65;
		t.height = 130;
		t.horizontalCenter = 0;
		t.source = "poker_back_png";
		t.verticalCenter = 0;
		t.width = 90;
		return t;
	};
	return CardItemSkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PlayerSkin.exml'] = window.PlayerSkin = (function (_super) {
	__extends(PlayerSkin, _super);
	function PlayerSkin() {
		_super.call(this);
		this.skinParts = ["winnerAnimation","avatarImage","nameLabel","scoreLabel","progressBorder","winnerBorder","cover"];
		
		this.height = 200;
		this.width = 140;
		this.winnerAnimation_i();
		this.elementsContent = [this._Image1_i(),this.avatarImage_i(),this.nameLabel_i(),this.scoreLabel_i(),this.progressBorder_i(),this.winnerBorder_i(),this.cover_i()];
		
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
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 194;
		t.horizontalCenter = 0;
		t.source = "bg_player_sprite_png";
		t.verticalCenter = 0;
		t.width = 134;
		return t;
	};
	_proto.avatarImage_i = function () {
		var t = new eui.Image();
		this.avatarImage = t;
		t.height = 112;
		t.horizontalCenter = 0;
		t.source = "image_default_avatar_png";
		t.verticalCenter = 0;
		t.width = 108;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.size = 22;
		t.text = "Stan";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 20;
		t.y = 10;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "25000";
		t.textAlign = "center";
		t.textColor = 0xffe9b7;
		t.width = 110;
		t.y = 160;
		return t;
	};
	_proto.progressBorder_i = function () {
		var t = new eui.Image();
		this.progressBorder = t;
		t.height = 200;
		t.source = "image_border_yellow_png";
		t.visible = false;
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winnerBorder_i = function () {
		var t = new eui.Image();
		this.winnerBorder = t;
		t.alpha = 0;
		t.height = 200;
		t.source = "image_border_yellow_png";
		t.width = 140;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cover_i = function () {
		var t = new eui.Rect();
		this.cover = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.5;
		t.height = 182;
		t.visible = false;
		t.width = 120;
		t.x = 10;
		t.y = 8;
		return t;
	};
	return PlayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/PotItemSkin.exml'] = window.PotItemSkin = (function (_super) {
	__extends(PotItemSkin, _super);
	function PotItemSkin() {
		_super.call(this);
		this.skinParts = ["amountLabel"];
		
		this.height = 44;
		this.width = 144;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.amountLabel_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.amount"],[0],this.amountLabel,"text");
	}
	var _proto = PotItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 0.7;
		t.height = 44;
		t.width = 144;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.source = "icon_scoreboard_chip_png";
		t.verticalCenter = 0;
		t.width = 36;
		t.x = 6;
		return t;
	};
	_proto.amountLabel_i = function () {
		var t = new eui.Label();
		this.amountLabel = t;
		t.textAlign = "center";
		t.textColor = 0xfbe3b0;
		t.width = 90;
		t.x = 44;
		t.y = 7;
		return t;
	};
	return PotItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameSkins/View/ScoreboardSkin.exml'] = window.ScoreboardSkin = (function (_super) {
	__extends(ScoreboardSkin, _super);
	function ScoreboardSkin() {
		_super.call(this);
		this.skinParts = ["chipLabel"];
		
		this.height = 32;
		this.width = 100;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.chipLabel_i()];
	}
	var _proto = ScoreboardSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillAlpha = 0.5;
		t.height = 32;
		t.width = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.source = "icon_scoreboard_chip_png";
		t.verticalCenter = 0;
		t.width = 22;
		t.x = 5;
		return t;
	};
	_proto.chipLabel_i = function () {
		var t = new eui.Label();
		this.chipLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 65;
		t.x = 27;
		t.y = 0;
		return t;
	};
	return ScoreboardSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LaunchSkins/InputPhoneNumberSkin.exml'] = window.InputPhoneNumberSkin = (function (_super) {
	__extends(InputPhoneNumberSkin, _super);
	var InputPhoneNumberSkin$Skin13 = 	(function (_super) {
		__extends(InputPhoneNumberSkin$Skin13, _super);
		function InputPhoneNumberSkin$Skin13() {
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
		var _proto = InputPhoneNumberSkin$Skin13.prototype;

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
		return InputPhoneNumberSkin$Skin13;
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
		t.skinName = InputPhoneNumberSkin$Skin13;
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
		t.label = "新建";
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
	var InputVerificationCodeSkin$Skin14 = 	(function (_super) {
		__extends(InputVerificationCodeSkin$Skin14, _super);
		function InputVerificationCodeSkin$Skin14() {
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
		var _proto = InputVerificationCodeSkin$Skin14.prototype;

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
		return InputVerificationCodeSkin$Skin14;
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
		t.skinName = InputVerificationCodeSkin$Skin14;
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
	var LaunchSkin$Skin15 = 	(function (_super) {
		__extends(LaunchSkin$Skin15, _super);
		function LaunchSkin$Skin15() {
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
		var _proto = LaunchSkin$Skin15.prototype;

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
		return LaunchSkin$Skin15;
	})(eui.Skin);

	var LaunchSkin$Skin16 = 	(function (_super) {
		__extends(LaunchSkin$Skin16, _super);
		function LaunchSkin$Skin16() {
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
		var _proto = LaunchSkin$Skin16.prototype;

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
		return LaunchSkin$Skin16;
	})(eui.Skin);

	var LaunchSkin$Skin17 = 	(function (_super) {
		__extends(LaunchSkin$Skin17, _super);
		function LaunchSkin$Skin17() {
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
		var _proto = LaunchSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "btn_close_png";
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
		return LaunchSkin$Skin17;
	})(eui.Skin);

	function LaunchSkin() {
		_super.call(this);
		this.skinParts = ["loginButton","visitorButton","closeButton"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.loginButton_i(),this.visitorButton_i(),this.closeButton_i()];
	}
	var _proto = LaunchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "bg_loading_png";
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 275;
		t.source = "icon_texas_holdem_logo_png";
		t.width = 468;
		t.x = 126.88;
		t.y = 206.46;
		return t;
	};
	_proto.loginButton_i = function () {
		var t = new eui.Button();
		this.loginButton = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 995;
		t.skinName = LaunchSkin$Skin15;
		return t;
	};
	_proto.visitorButton_i = function () {
		var t = new eui.Button();
		this.visitorButton = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 843.3;
		t.skinName = LaunchSkin$Skin16;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.label = "";
		t.visible = false;
		t.x = 650;
		t.y = 40;
		t.skinName = LaunchSkin$Skin17;
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
		this.elementsContent = [this._Image1_i(),this.loadingLabel_i(),this._Image2_i(),this.progressBar_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "bg_loading_png";
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
		t.percentWidth = 100;
		t.y = 973;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 275;
		t.source = "icon_texas_holdem_logo_png";
		t.width = 468;
		t.x = 126.88;
		t.y = 206.46;
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
		t.width = 112;
		t.y = 820;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);