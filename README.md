x-image-processing
==================

a simple image upload and processing module in node.js

and this image processing module under development but all time it usable

So hope this library help someone like me.

Any ideas are appreciated.

##Features

* image crop
* image resize
* image upload

##Dependencies

By default:

* [gm](http://aheckmann.github.io/gm/)

##Installation

	npm install x-image-processing --save

##How to use

  this module use is so easy just require module and call function
  
  		require('x-image-processing');
			xip.upload(<raw file data>,<upload path>,<file name>);
			xip.resize(<upload path>,<width>,<height>);
			xip.crop(<upload path>,<width>,<height>,<X>,<Y>);

###Example

  Here i have give you a simple i think it will help
  
      var xip=require('x-image-processing');
			var product_image=req.files.product_pic;//raw file data(product_pic is file field name)
			xip.upload(product_image,'./public/images/product/',dt_join);
			xip.resize('./public/images/product/thumb/',100,100);
			xip.crop('./public/images/product/crop/',100,100,20,20);

