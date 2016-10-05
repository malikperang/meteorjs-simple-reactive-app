var THREEx = THREEx || {}

THREEx.VideoTexture	= function(url){
	// create the video element
	var video	= document.createElement('video');
	video.width	= 320;
	video.height	= 320;
	video.autoplay	= false;
	video.loop	= false;
	video.src	= url;

	// expose video as this.video
	this.video	= video

	// create the texture
	var texture	= new THREE.Texture( video );
	// texture.magFilter = THREE.NearestFilter;
	texture.minFilter = THREE.LinearFilter;
	// expose texture as this.texture
	console.log(texture);
	this.texture	= texture

	/**
	 * update the object
	 */
	 this.update	= function(){
	 	if( video.readyState !== video.HAVE_ENOUGH_DATA )	return;
	 	texture.needsUpdate	= true;		
	 }

	/**
	 * destroy the object
	 */
	 this.destroy	= function(){
	 	video.pause()
	 }
	}