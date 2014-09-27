var fs=require('fs');
var gm=require('gm').subClass({ imageMagick: true });

var image_path='';
var image_name=''

//upload image/file
exports.upload = function(img_obj,upload_path,file_name) {
	var arr=img_obj.name.split('.');
	var ext=arr[(arr.length-1)];
	image_name=file_name+'.'+ext;
	image_path=upload_path+file_name+'.'+ext;
	fs.rename(img_obj.path,image_path,function(err){
		if(err){
			console.log(err);
		}
		});
};

//resize image
exports.resize = function(thumb_path,width,height) {
	gm(image_path).resize(width,height).noProfile().write(thumb_path+image_name, function (err) {if (err){ console.log(err);}});
};

//crop image
exports.crop = function(crop_path,width, height, x, y) {
gm(image_path).crop(width, height, x, y).write(crop_path+image_name, function (err) {if (err){ console.log(err);}});
};

//get image name
exports.getName=function(){
	return image_name;
	};
