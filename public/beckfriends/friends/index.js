	var ntfnd = 0; var center;var firebaseRef = new Firebase("https://beckrequest.firebaseio.com");
	var geoFire = new GeoFire(firebaseRef.child("_geopckgs")); var geoQuery = geoFire.query({center: [0,0],radius: 0});
	var vehiclesInQuery = {}, img64="", verf1="", verf2="", autoflag=0, deliveryFare, pickuplat,pickuplng, delvlat, delvlng, description=" ", pickuparea, pickupaddr=" ", pickupname, pickupnum, deliveryaddr=" ", deliveryarea, deliverynum, deliveryname,deliverydate,deliverytime, pckgvalue = "Less than Rs. 5000", pckgweight = "1 Kg - 10 Kgs",pckgsize = "SMALL (FITS IN BAG)";
	var pfare, psize, pweight, ppickup, ppickupaddr, pdelv,pdelvaddr,pdatetym,pckgimg,imagz, pusrid, pusrphn, porderid;
	var loggedin=0,usrname="",usremail="",usrphone="",usrid="", usrfbimg="", usrfbid="", usrnewmail="", reader,reader2,reader3,img;
	var otp, otpmail, locerr = 0, hiname = 0, acceptsloaded = 1, fare ="", conval = 1, convcurr="INR";
	var usrimg = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCADIAMgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1qiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopKAFprMFGSaSSQIPeqzMWOTQBK1x/dFRmRz/ABGm0UALub1NKJHH8RptFAEy3H94VKrBhkGqlKrFTkHFAFyimRyBx70+gAooooAKKKKACiiigAooooAKKKKACiiigAooooAKazBVJNOqvO2SFoAjZixyaSiigAooooAKKKKACiiigBVYq2RVpWDKCKqVLA3O2gCxRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVUkOXJq1VM9TQAUUUUAFFFFABRRRQAUUUUAFOjOHBptA6igC7RRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVUcYcirdV51wwb1oAiooooAKKKKACiiigAooooAKVBlwPekqWBctu9KALFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABTXUMpFOpKAKZBBwetFWZI94yOtViCpwaACiiigAooooAKKKACTgCgAALHA71bRdigU2OMIMnrUlABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFNZFccinUUAV2gYfdOajKMOoNXKKAKWKUKx6A1bpaAK6wMfvcVMqKg4p1FABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSEhRk0AFRPOBwvNRySFz7elMoAeZXPem7j6mkooAXJ9TRk+ppKKAFyfU0ZPqaSigBcn1NGT6mkooAXJ9TRk+ppKKAFyfU0bj6mkooAcJHHepFn7MPxqGigC4CCMg5paqI5Q8flVlGDjIoAdRRRQAUUUUAFFFFACVXmfc2B0FTSNtQmqtABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFOjco3t3ptFAFwc0tRQtlMelS0AFFFFABRRRQBBcHgCoaluPvD6VFQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBLAcPj1FWKrQf6wVZoAKKKKACiiigCvcfeH0qKpbj7w+lRUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUASQf6wVZqtB/rBVmgAooooAKKKKAK9x94fSoqluPvD6VFQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBJB/rBVmq0H+sFWaACiiigAooooAr3H3h9KioooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAkg/wBYKs0UUAFFFFAH/9k=";
	var arrPckgs = [], rsltshow = 0, arraccepts = [], revrsdone = 0, mycenter, lognclckd = 0, flgg=0, postctr = 0, acceptctr = 0;
	var newflg=0; var unverf = 0; var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
	var startlat,startlng,endlat,endlng; var accptrid,accptrname,accptrphone,accptrfbid,accptrlinkdid,accptrgooglid;
	var notif1=0, notif2=0; var accptrid,accptrname,accptrphone,accptrfbid,accptrlinkdid,accptrgooglid,pname,paddr,pno,dname,daddr,dno;
	var showthetour = 0;
	app.controller('AppController', ["$scope", "$firebaseArray", "$firebaseObject", function($scope, $firebaseArray, $firebaseObject) {
		document.getElementsByTagName("body")[0].style.display='block';
		$scope.post2 = function(){
			postctr = 1;
			if(loggedin==1){ 
			if(usrphone=="" || usrphone==null || usrphone === undefined || usrphone === null){
				swal({   title: "Oops...",   text: "You can't post a request without adding your phone number!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#3b5998",   confirmButtonText: "Yes, Verify!",   cancelButtonText: "No",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    smsending()   } else {     swal("Cancelled", "Your posting process could not be completed", "error");   } });
			}	else{
				post();
			}
			}else{ 
			$('#signleft').click()
			};
		}			
		
		
		$scope.approvefrnd = function(){
				$scope.hidedlg('list.html');
				swal({   title: "Confirm BECK Friend",   text: "Are you sure you want to confirm this person to carry your package?",   type: "info",   showCancelButton: true,   closeOnConfirm: false,   showLoaderOnConfirm: true, }, function(){   		
				myNavigator.pushPage('approvefrnd.html', { animation : 'none' } );
				var actionz = "BECK friend "+ accptrname +" was selected for order: " + idpckgmatch;
				mailcall(actionz,accptrid,accptrphone); mailcallmatch2(acceptemail,accptrname,pname,paddr,pno,dname,daddr,dno);
				smsmatchsuppl(accptrphone); mailcallmatch(usrname,usremail,accptrname,acceptemail,accptrphone);
				smsmatchdmnd(usrphone,accptrname,accptrphone);
				firebaseRef.child("users").child(usrid).child("posts").child(idpckgmatch).update({"status":"Approved & Connected"});
				firebaseRef.child("users").child(accptrid).child("accepts").child(idpckgmatch).update({"status":"Approved"}).then(function() {
				firebaseRef.child("users").child(usrid).child("posts").child(idpckgmatch).child("acceptors").remove();
				geoFire.remove(idpckgmatch);	
				setTimeout(function(){
				myNavigator.popPage('approvefrnd.html', { animation : 'none' } ); myNavigator.popPage('track.html', { animation : 'none' } ); myNavigator.popPage('posted.html', { animation : 'none' } );
				swal("Succesfully Connected", "The details of the BECK Friend you approved for this request has been sent to you through SMS & Email", "success");
				},3000)
				});		
			});	
		}
		
		$scope.fillboxes = function(detail){		
		imagz="";
		myNavigator.pushPage('track.html', { animation : 'push' } );
		setTimeout(function(){
		summbrk = 0;
		showsummprof();
		if(detail.status == 'Approved'){
			document.getElementById("tflpnmct").innerHTML = detail.pickupname + "<br>" + detail.pickupnum;
			document.getElementById("tfldnmct").innerHTML = detail.delvname + "<br>" + detail.delvnum;
			document.getElementById("pickupdivv").style.display="block";
			document.getElementById("delvdivv").style.display="block";
		}
		document.getElementById("accptrdiv").style.display="none";
		document.getElementById("appfrndbtn").style.display="none";
		document.getElementById("tflfare").innerHTML = detail.fare;
		document.getElementById("tsizewt").innerHTML = detail.weight+" "+detail.size;
		document.getElementById("tflpickarea").innerHTML = detail.pickup;
		document.getElementById("tflpickaddr").innerHTML = detail.pickupaddr;
		document.getElementById("tfldelv").innerHTML = detail.delv;
		document.getElementById("tfldelvaddr").innerHTML = detail.deliveryaddr;
		document.getElementById("tfldtym").innerHTML = detail.datetym;
		firebaseRef.child("packages").child(detail.id).child("img").once("value", function(dataSnapshot) {
			imagz = dataSnapshot.child("img64").val();
			$("#tflbckg").css("background-image", "url('" + imagz + "')");
		});
		},100)
	};
	
	
	
		
	$scope.dialogs = {};
	$scope.show = function(dlg,value) {
    if (!$scope.dialogs[dlg]) {
      ons.createDialog(dlg).then(function(dialog) {
        $scope.dialogs[dlg] = dialog;
        dialog.show();
      });
    } else {
      $scope.dialogs[dlg].show();
    }
		
	$scope.fbshow = false;$scope.googleshow = false;$scope.linkdinshow = false;
		$scope.accptrnm = "Loading..."; $scope.accptrcomp = "Loading..."; $scope.accptrimg = "profile.png";
		$scope.accptrlocation = " -- "; $scope.accptrcompany = " -- ";
		accptrname = value.usrname; accptrphone = value.usrphone;
		accptrid = value.id; $scope.cols = 10;
		firebaseRef.child("users").child(accptrid).child("account").once("value", function(dataSnapshot) {	
		$scope.$apply(function () {
            $scope.accptrnm = dataSnapshot.child("usrname").val();
			$scope.accptrcomp = dataSnapshot.child("completed").val() +"% verified";
			$scope.cols = dataSnapshot.child("completed").val(); move2(Number(dataSnapshot.child("completed").val()));
			if(dataSnapshot.child("facebook").val()){
				accptrfbid = dataSnapshot.child("facebook").child("fbid").val();
				document.getElementById("accptrfbbtn").style.display="inline-block";
			}if(dataSnapshot.child("google").val()){
				accptrgooglid = dataSnapshot.child("google").child("id").val();
				document.getElementById("accptrglbtn").style.display="inline-block";
			}if(dataSnapshot.child("linkedin").val()){
				accptrlinkdid = dataSnapshot.child("linkedin").child("profileurl").val();
				document.getElementById("accptrlinkdbtn").style.display="inline-block";				
			}
			$scope.accptrimg = dataSnapshot.child("usrimg").val();
			$scope.accptrlocation = dataSnapshot.child("location").val(); acceptemail = dataSnapshot.child("usremail").val();
			if(dataSnapshot.child("company").val()) $scope.accptrcompany = getWords( String(dataSnapshot.child("company").val()));
        });		
		})
	}
	
	$scope.hidedlg = function(dlg) {
		$scope.dialogs[dlg].hide();
	}
		
	$scope.fillboxes2 = function(detail){				
		if(detail.acceptors === undefined){
			$scope.acceptors = '';			
		}
		else{
			var obj = detail.acceptors; var dett = Object.keys(obj).map(function(k) { return obj[k] });
			$scope.acceptors = dett; 
			if(dett.length>0 && detail.status=="Waiting for Accept"){
				firebaseRef.child("users").child(usrid).child("posts").child(detail.id).update({status:"Waiting for Approval"});
			}
		}		
		imagz="";
		myNavigator.pushPage('track.html', { animation : 'push' } );
		setTimeout(function(){
			document.getElementById("tflpnmct").innerHTML = detail.pickupname + "<br>" + detail.pickupnum;
			document.getElementById("tfldnmct").innerHTML = detail.deliveryname + "<br>" + detail.deliverynum;
			document.getElementById("pickupdivv").style.display="block";
			document.getElementById("delvdivv").style.display="block";
			
		if(detail.acceptors === undefined){
			document.getElementById("accptrdiv").style.display="none";
			
		}
		else if(detail.status=="Approved & Connected"){
			document.getElementById("accptrdiv").style.display="none";
			
		}
		else{
			document.getElementById("accptrdiv").style.display="block";
			idpckgmatch = detail.id;
		};	
		
		document.getElementById("tflfare").innerHTML = detail.fare;
		document.getElementById("tsizewt").innerHTML = detail.pckgweight+" , "+detail.pckgsize;
		document.getElementById("tflpickarea").innerHTML = detail.pickuparea;
		document.getElementById("tflpickaddr").innerHTML = detail.pickupaddr;
		document.getElementById("tfldelv").innerHTML = detail.deliveryarea;
		document.getElementById("tfldelvaddr").innerHTML = detail.deliveryaddr;
		idpckgmatch = detail.id; pname = detail.pickupname; paddr = detail.pickuparea+" , "+detail.pickupaddr; pno = detail.pickupnum; dname = detail.deliveryname; daddr = detail.deliveryarea+" , "+detail.deliveryaddr; dno = detail.deliverynum;
		document.getElementById("tfldtym").innerHTML = "By " + detail.deliverydate + " " + detail.deliverytime;
		firebaseRef.child("packages").child(detail.id).child("img").once("value", function(dataSnapshot) {
			imagz = dataSnapshot.child("img64").val();
			$("#tflbckg").css("background-image", "url('" + imagz + "')");
		});
		},100);
		}
	
    	
			
		$scope.accept2 = function(){
		 acceptctr = 1;
		if(loggedin==1){
		if(usrphone=="" || usrphone==null || usrphone === undefined || usrphone === null){
			swal({   title: "Oops...",   text: "You can't accept a request without adding your phone number!",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#3b5998",   confirmButtonText: "Yes, Verify!",   cancelButtonText: "No",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {    smsending()   } else {     swal("Cancelled", "Your accept process could not be completed", "error");   } });
		}
		else if(usrid==arrPckgs[rsltshow].usrid){
			sweetAlert("Oops...", "You can't accept the same Request posted by you!", "error");
		}
		else{
		var interval = setInterval(function(){
		if(typeof usrid === 'undefined'){}
		else{
		firebaseRef.child("users").child(usrid).child("accepts").child(arrPckgs[rsltshow].id).once("value", function(snapshot){	
		if(snapshot.val()){
			swal("Oops", "You can't accept the same request twice", "error"); clearInterval(interval); return;  			
		}else{	
		myNavigator.pushPage('accept.html', { animation : 'none' } );
		clearInterval(interval);
		firebaseRef.child("users").child(usrid).child("accepts").child(arrPckgs[rsltshow].id).update(arrPckgs[rsltshow]);
		firebaseRef.child("users").child(arrPckgs[rsltshow].usrid).child("posts").child(arrPckgs[rsltshow].id).update({status:"Waiting for Approval"});
		firebaseRef.child("users").child(usrid).child("accepts").update({notification:"yes"});
		firebaseRef.child("users").child(arrPckgs[rsltshow].usrid).child("posts").update({notification:"yes"});
		firebaseRef.child("users").child(arrPckgs[rsltshow].usrid).child("posts").child(arrPckgs[rsltshow].id).child("acceptors").child(usrid).update({id:usrid,usrname:usrname,usrphone:usrphone, usrfbid:usrfbid, usrimg:usrimg}).then(function() {
		smsacceptdm(arrPckgs[rsltshow].usrphn);smsacceptsupp(usrphone); var actionz = "BECK friend "+ usrname +" accepted a new order: " + arrPckgs[rsltshow].id; mailcall(actionz,usremail,usrphone);	
		myNavigator.popPage('accept.html', { animation : 'none' } );
		myNavigator.popPage('page4.html', { animation : 'none' } );
		google.maps.event.trigger(map, 'resize'); swal("Succesfully Accepted", "You have successfully accepted the request", "success");
  		arraccepts.push(arrPckgs[rsltshow].id);
		rfrshresults(map.getCenter());
		})			
		};
		})		
		}
		},2000);		
		}
		}else{
		$('#signleft').click()
		}
		};
		
	$scope.accptrfb = function(){
		window.open('http://www.fb.com/'+accptrfbid,'_blank');
	}
	
	$scope.accptrgoogl = function(){
		window.open('https://plus.google.com/'+accptrgooglid,'_blank');
	}
	
	$scope.accptrlinkdin = function(){
		window.open(accptrlinkdid,'_blank');
	}	
		
		var intervall = setInterval(function(){
		  if(loggedin == 1){
			clearInterval(intervall);			
			$scope.accepts = $firebaseArray(firebaseRef.child("users").child(usrid).child("accepts"));			
			$scope.accepts.$loaded().then(function(arr){
				if(arr.$getRecord("notification")){
				if(arr.$getRecord("notification").$value == "no"){
					document.getElementById("notif1").style.display="none";
				}
				else{
					notif1 = 1;
					document.getElementById("notif1").style.display="inline";
					document.getElementById("notif").style.display="inline";
				}
				}				
			});
			
		$scope.posts = $firebaseArray(firebaseRef.child("users").child(usrid).child("posts"));
		$scope.posts.$loaded().then(function(arr){	
			if(arr.$getRecord("notification")){		
				if(arr.$getRecord("notification").$value == "no"){
					document.getElementById("notif2").style.display="none";
				}
				else{
					notif2 = 1;
					document.getElementById("notif2").style.display="inline";
					document.getElementById("notif").style.display="inline";
				}
			}
		});
		$scope.googleconnect = $firebaseArray(firebaseRef.child("users").child(usrid).child("account").child("google"));
		$scope.accountz = $firebaseObject(firebaseRef.child("users").child(usrid).child("account"));
		$scope.accountdet = $firebaseArray(firebaseRef.child("users").child(usrid).child("account"));
		$scope.linkedinconnect = $firebaseArray(firebaseRef.child("users").child(usrid).child("account").child("linkedin"));
		$scope.fbconnect = $firebaseArray(firebaseRef.child("users").child(usrid).child("account").child("facebook"));
		$scope.routes = $firebaseArray(firebaseRef.child("users").child(usrid).child("account").child("routes"));
		$scope.addRoute = function() {
		if(unverf==0){
			if(document.getElementById("startarea").value=="" || document.getElementById("endarea").value==""){
				swal({   title: "Route Locations",   text: "Please add both the starting and ending locations of your route",   type: "error",   confirmButtonText: "Ok" });
			}else if(startlat==0 || endlat==0 || startlng==0 || endlng==0){
				swal({   title: "Route Locations",   text: "For starting and ending lcoations, please select from the results that appear",   type: "error",   confirmButtonText: "Ok" });
			}else{
			var	strtlocaddr = document.getElementById("startarea").value; var endlocaddr = document.getElementById("endarea").value;
			$scope.routes.$add({ startlat:startlat, startlng:startlng, strtlocaddr:strtlocaddr, endlat:endlat, endlng:endlng, endlocaddr:endlocaddr});
			document.getElementById("startarea").value = ""; document.getElementById("endarea").value = "";
			startlat=0; startlng=0; strtlocaddr="";endlat=0; endlng=0; endlocaddr="";
			}		
		}else{
		sweetAlert("Oops...", "Please verify your Email first!", "error");
		}	
		};
		  }
		},2000);	
		}
	]);

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

function getWords(str) {
    return str.split(/\s+/).slice(0,2).join(" ");
	}

	function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
   }
var underverf = 0;
$(document).ready(function($){
	
	var value = readCookie('beckusrmail');
	if(value){
		checkfirebase(value);
	}else{
		showthetour = 1;
		var linkref = String(getQueryVariable('id'));
		if(linkref == 'undefined'){
			
			document.getElementById("signleft").style.display = "inline";
		}else{
			var decodedString = String(Base64.decode(linkref));
			document.cookie = "beckusrmail="+decodedString+"; expires=Wed, 14 Feb 2029 12:00:00 UTC";
			setTimeout(function(){ var value2 = readCookie('beckusrmail');	if(value2){ checkfirebase(value2)}
			else{window.location = "https://www.beckfriends.com/friends/"}
			},2000);
			window.history.pushState({id: 'BECK'}, 'BECK Friends', 'https://www.beckfriends.com/friends/');	
		}		
	}
	
	
	var $form_modal = $('.cd-user-modal'),
		$form_login = $form_modal.find('#cd-login'),
		$form_signup = $form_modal.find('#cd-signup'),
		$form_forgot_password = $form_modal.find('#cd-reset-password'),
		$form_modal_tab = $('.cd-switcher'),
		$tab_login = $form_modal_tab.children('li').eq(0).children('a'),
		$tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
		$forgot_password_link = $form_login.find('.cd-form-bottom-message a'),
		$back_to_login_link = $form_forgot_password.find('.cd-form-bottom-message a'),
		$main_nav = $('#signleft'); 
		
	$main_nav.on('click', function(event){
		$form_modal.addClass('is-visible'); ( $(event.target).is('.cd-signup') ) ? signup_selected() : login_selected();
		
	});

	$('.cd-user-modal').on('click', function(event){
		if( $(event.target).is($form_modal) || $(event.target).is('.cd-close-form') ) {
			$form_modal.removeClass('is-visible');
		}	
	});
	
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$form_modal.removeClass('is-visible');
	    }
    });

	$form_modal_tab.on('click', function(event) {
		event.preventDefault();
		( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected();
	});

	$('.hide-password').on('click', function(){
		var $this= $(this),
			$password_field = $this.prev('input');
		
		( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
		( 'Hide' == $this.text() ) ? $this.text('Show') : $this.text('Hide');
		$password_field.putCursorAtEnd();
	});

	$forgot_password_link.on('click', function(event){
		event.preventDefault();
		forgot_password_selected();
	});

	$back_to_login_link.on('click', function(event){
		event.preventDefault();
		login_selected();
	});

	function login_selected(){
		$form_login.addClass('is-selected');
		$form_signup.removeClass('is-selected');
		$form_forgot_password.removeClass('is-selected');
		$tab_login.addClass('selected');
		$tab_signup.removeClass('selected');
	}

	function signup_selected(){
		$form_login.removeClass('is-selected');
		$form_signup.addClass('is-selected');
		$form_forgot_password.removeClass('is-selected');
		$tab_login.removeClass('selected');
		$tab_signup.addClass('selected');
	}

	function forgot_password_selected(){
		$form_login.removeClass('is-selected');
		$form_signup.removeClass('is-selected');
		$form_forgot_password.addClass('is-selected');
	}

	//REMOVE THIS - it's just to show error messages 
	$form_login.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		$form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});
	$form_signup.find('input[type="submit"]').on('click', function(event){
		event.preventDefault();
		$form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
	});

});

jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	if (this.setSelectionRange) {
      		var len = $(this).val().length * 2;
      		this.focus();
      		this.setSelectionRange(len, len);
    	} else {
      		$(this).val($(this).val());
    	}
	});
};

	function rotatethis(){
		swal({   title: "Rotate Image",   text: "Are you sure you want to rotate this image by 90 degrees?",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#AEDEF4",   confirmButtonText: "Yes",   closeOnConfirm: true }, function(){ rotateBase64Image(img64, 'callback');   swal("Rotation", "Your image is being rotated!", "success"); });
	}
	
	function rotateBase64Image(base64data, callback) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");

    var image = new Image();
    image.src = base64data;
    image.onload = function() {
		canvas.width = image.height;
    canvas.height = image.width;
    ctx.rotate(90 * Math.PI / 180);
    ctx.translate(0, -canvas.width);
    ctx.drawImage(image, 0, 0); window.eval(""+callback+"('"+canvas.toDataURL('image/jpeg')+"')");
    };

	}
		
	function callback(base64data) {	img64 = base64data;
	 document.getElementById("card").style.backgroundImage = "url('"+img64+"')";
		document.getElementById("card").style.backgroundSize = "contain"; document.getElementById("card").style.backgroundPosition = "center"; document.getElementById("card").style.backgroundRepeat = "no-repeat"; }
	
	function openposts(){
		myNavigator.pushPage('posted.html', { animation : 'push' } );
		firebaseRef.child("users").child(usrid).child("posts").update({notification:"no"});
		document.getElementById("notif2").style.display="none"; notif2=0;
		if(notif1==0 && notif2==0) document.getElementById("notif").style.display="none";
	}
		
	function openaccepts(){
		myNavigator.pushPage('schedule.html', { animation : 'push' } );
		firebaseRef.child("users").child(usrid).child("accepts").update({notification:"no"});
		document.getElementById("notif1").style.display="none"; notif1 = 0;
		if(notif1==0 && notif2==0) document.getElementById("notif").style.display="none";
	}
	
	
	function performClick(elemId) {
   var elem = document.getElementById(elemId);
   if(elem && document.createEvent) {
      var evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, false);
      elem.dispatchEvent(evt);
   }
}
	function exit(){
		swal({   title: "Are you sure?",   text: "You will lose the data you added for this request",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#8989ff",   confirmButtonText: "Yes, go back",   closeOnConfirm: true }, function(){   myNavigator.popPage('page1.html', { animation : 'lift' } ); google.maps.event.trigger(map, 'resize'); });
	}
	
	  function smsmatchdmnd(number,name1,num1){
	if(String(number).substring(0, 2) == '91'){
	  $.ajax({
      url: 'https://www.beckme.in/otp.php',
      data:
      {
        phoneNumber : number,
        randomNumber : 'Your request has been accepted by your BECK friend '+String(name1).split(" ")[0].substring(0, 30)+' whom you can reach at '+num1
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
        //console.log("01"+JSON.stringify(data));
       },
      type: 'POST'
	});
	}else{
	$.ajax({
      url: 'https://www.beckme.in/otpint.php',
      data:
      {
        phoneNumber : number,
        randomNumber : 'Your request has been accepted by your BECK friend '+String(name1).split(" ")[0].substring(0, 30)+'. You can reach him at '+num1
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
       //console.log("02"+JSON.stringify(data));
       },
      type: 'POST'
	});
	}
	}
	
	function smsmatchsuppl(number){	
	if(String(number).substring(0, 2) == '91'){
	$.ajax({
      url: 'https://www.beckme.in/otp.php',
      data:
      {
        phoneNumber : number,
        randomNumber : 'Thanks for accepting the request of your BECK friend '+String(usrname).split(" ")[0].substring(0, 30)+' whom you can reach at '+usrphone
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
      // console.log("11"+JSON.stringify(data));
       },
      type: 'POST'
	});
	}else{
	$.ajax({
      url: 'https://www.beckme.in/otpint.php',
      data:
      {
        phoneNumber : number,
        randomNumber : 'Thanks for accepting the request of your BECK friend '+String(usrname).split(" ")[0].substring(0, 30)+'. You can reach him at '+usrphone
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
       //console.log("12"+JSON.stringify(data));
       },
      type: 'POST'
	});
	}
	}
	
	
	function mailconfirm(uemail,pass){
	//otpmail = Math.floor((Math.random() * 900) + 1000);
	$.ajax({
      url: 'https://www.beckme.in/mailverification.php',
      data:
      {
        name : usrname,
		email : uemail,
		value : pass
      },
      error: function(error) {
        },
      success: function(data) {
       },
      type: 'POST'
	});
	}
	
	
	function mailcallmatch2(useremail,username,pname,paddr,pno,dname,daddr,dno){
	$.ajax({
      url: 'https://www.beckme.in/details.php',
      data:
      {
		acceptemail:useremail,
		acceptname:username,
		pname : pname,
		paddr : paddr,
		pno : pno,
		dname : dname,
		daddr : daddr,
		dno : dno,
      },
      error: function(error) {
		//console.log(error)
        },
      success: function(data) {
		//  console.log(data)
       },
      type: 'POST'
	});
	}
	
	function mailcallmatch(username,useremail,acceptname,acceptemail,acceptphone){
	$.ajax({
      url: 'https://www.beckme.in/details2.php',
      data:
      {
		usremail:useremail,
		usrname:username,
        acceptemail:acceptemail,
		acceptname:acceptname,
		acceptno:acceptphone
      },
      error: function(error) {
		//console.log(error)
        },
      success: function(data) {
		//  console.log(data)
       },
      type: 'POST'
	});
	}
	
	
	function mailcall(custName,custEmail,custPhone){
	$.ajax({
      url: 'https://www.beckme.in/request.php',
      data:
      {
        name : custName,
		email : custEmail,
		phoneno : custPhone
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
       // console.log("worked");
       },
      type: 'POST'
	});
	}
	
	$(document).on({
    'DOMNodeInserted': function() {
		$('.pac-item, .pac-item span', this).addClass('needsclick');
    }
	}, '.pac-container');
		
	var nofkeys=0;
	geoQuery.on("key_entered", function(vehicleId, vehicleLocation) {
	vehiclesInQuery[vehicleId] = true;
	firebaseRef.child("packages").child(vehicleId).once("value", function(dataSnapshot) {
    vehicle = dataSnapshot.val();
	if (vehicle !== null && vehiclesInQuery[vehicleId] === true) {
    vehiclesInQuery[vehicleId] = vehicle;
	createVehicleMarker(vehicle,vehicleId);
	}	
	});
  });


function isValidDate(dateString) {
  var regEx = /^\d{4}-\d{2}-\d{2}$/;
  return dateString.match(regEx) != null;
}

function forcekeyexit(vehicleId){
	var vehicle = vehiclesInQuery[vehicleId];
	if(vehicle !== undefined){
  if (vehicle !== true) {
   // vehicle.marker.setMap(null);
	findAndRemove(arrPckgs, 'id', vehicleId);
  }
  delete vehiclesInQuery[vehicleId];
	}
}

geoQuery.on("key_exited", function(vehicleId, vehicleLocation) {
  forcekeyexit(vehicleId);  
})
	
	
	function getLocation() {
	if (navigator.geolocation) {
		//document.getElementsByTagName("body")[0].style.display='none';		
		navigator.geolocation.getCurrentPosition(showPosition,onerror,{maximumAge:600000});
    }
	}
	
	function shownext(){
		if((rsltshow+1)<nofkeys){
			rsltshow++;
			showreslt(rsltshow);
			drawroute(arrPckgs[rsltshow].pickuplat, arrPckgs[rsltshow].pickuplng, arrPckgs[rsltshow].delvlat, arrPckgs[rsltshow].delvlng);
		}		
		
	}
	
	function showprev(){
		if(rsltshow>0){
			rsltshow--;
			showreslt(rsltshow);
			drawroute(arrPckgs[rsltshow].pickuplat, arrPckgs[rsltshow].pickuplng, arrPckgs[rsltshow].delvlat, arrPckgs[rsltshow].delvlng);
		}			
	}
	
	var path = null;
	var hotSpotMapMarkers = [];
	
	function drawroute(picklat,picklng,delvlat,delvlng){	
	for (var i = 0; i < hotSpotMapMarkers.length; i++)
    hotSpotMapMarkers[i].setMap(null);
	var flightPlanCoordinates = [{lat:picklat,lng:picklng},{lat:delvlat,lng:delvlng}];
	var latlngbounds = new google.maps.LatLngBounds();
	latlngbounds.extend(new google.maps.LatLng(picklat,picklng));
	latlngbounds.extend(new google.maps.LatLng(delvlat,delvlng));
	
	var polyLine = new google.maps.Polyline({
    path: flightPlanCoordinates,
    strokeColor: "#2bb1de",
	strokeWeight: 2,
	geodesic:true
	});
	var prepath = path;
	if(prepath){prepath.setMap(null);
	}
	polyLine.setMap(map);
	path = polyLine;
	hotSpotMapMarkers.push(new google.maps.Marker({
    position: new google.maps.LatLng(picklat, picklng),
    optimized: true,
	icon: "package_green.png",
    map: map
	}));
	hotSpotMapMarkers.push(new google.maps.Marker({
    position: new google.maps.LatLng(delvlat, delvlng),
    optimized: true,
	icon: "package_red.png",
    map: map
	}));
	map.fitBounds(latlngbounds);
	}
	
	
	function calcpercent(){
	var percentage = 0;
	firebaseRef.child("users").child(usrid).child("account").once("value", function(dataSnapshot) {
		if(dataSnapshot.child("facebook").val()){
			percentage += 10; document.getElementById("fbnotconn").style.display="none"; document.getElementById("fbconn").style.display="block";
		} if(dataSnapshot.child("google").val()){
			percentage += 10; document.getElementById("googlnotconn").style.display="none"; document.getElementById("googlconn").style.display="block";
		} if(dataSnapshot.child("linkedin").val()){
			percentage += 10; document.getElementById("linkdnotconn").style.display="none"; document.getElementById("linkdconn").style.display="block";
		} if(dataSnapshot.child("routes").val()){
			if((dataSnapshot.child("routes").numChildren())*5 >= 20){
				percentage += 20; 
			}else{
				percentage += (dataSnapshot.child("routes").numChildren())*5;
			}			
		}if(dataSnapshot.child("idforverify").child("first").val()){
			document.getElementById("verifbckg1").style.background = "url('"+dataSnapshot.child("idforverify").child("first").val()+"') center/contain no-repeat";
			document.getElementById("verfwrt").style.display = "none";
		}if(dataSnapshot.child("idforverify").child("second").val()){
			document.getElementById("verifbckg2").style.background = "url('"+dataSnapshot.child("idforverify").child("second").val()+"') center/contain no-repeat";
			document.getElementById("verfwrt2").style.display = "none";
		}if(dataSnapshot.child("idverify").val()){
			percentage += (dataSnapshot.child("idverify").numChildren())*15;
		} if(dataSnapshot.child("usrphone").val()){
			percentage += 20;
		}
	document.getElementById("calcperc").innerHTML = percentage +"% completed"; move(percentage);
	});
	if(unverf==0){
	firebaseRef.child("users").child(usrid).child("account").update({completed:percentage});			
	}
	}
	
function move(num) {
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= num) {
      clearInterval(id);
    } else {
	  width++;
      elem.style.width = width + '%'; 
    }
  }
}


function move2(num) {
  var elem = document.getElementById("myBar2");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= num) {
      clearInterval(id);
    } else {
	  width++;
      elem.style.width = width + '%'; 
    }
  }
}

	
	function showreslt(i){
	if(i<nofkeys){
		document.getElementById("pckgctr").innerHTML = (i+1) +" of " + nofkeys;
	}
	if(nofkeys==1){
		document.getElementById("prevbtn").style.display="none"; document.getElementById("nxtbtn").style.display="none";
	}
	else{
	if(i==0){
		document.getElementById("prevbtn").style.display="none";
	}else{
		document.getElementById("prevbtn").style.display="inline";
	}
	if(i == nofkeys-1){
		document.getElementById("nxtbtn").style.display="none";
	}else{
		document.getElementById("nxtbtn").style.display="inline";
	}	
	}
	document.getElementById("pfare").innerHTML = arrPckgs[i].fare;
	document.getElementById("psize").innerHTML = arrPckgs[i].size;
	document.getElementById("pdatetym").innerHTML = arrPckgs[i].datetym;
	document.getElementById("ppickup").innerHTML = arrPckgs[i].pickup;	
	document.getElementById("pdelv").innerHTML = arrPckgs[i].delv;	
	document.getElementById("rqstgist").style.display="block";
	
	if(i==0){
		//alert(document.getElementById('rqstgist').clientHeight+140);
		document.getElementById("map").style.height = 'calc(100% - 330px)'
		google.maps.event.trigger(map, 'resize');
	}
	
	}
	
	function openaccept(){
		imagz="";
		myNavigator.pushPage('page4.html', { animation : 'push' } );
		setTimeout(function(){ 
		document.getElementById("pflfare").innerHTML = arrPckgs[rsltshow].fare;
		document.getElementById("psizewt").innerHTML = arrPckgs[rsltshow].weight+" "+arrPckgs[rsltshow].size;
		document.getElementById("pflpickarea").innerHTML = arrPckgs[rsltshow].pickup;
		//document.getElementById("pflpickaddr").innerHTML = arrPckgs[rsltshow].pickupaddr;
		document.getElementById("pfldelv").innerHTML = arrPckgs[rsltshow].delv;
		//document.getElementById("pfldelvaddr").innerHTML = arrPckgs[rsltshow].deliveryaddr;
		document.getElementById("pfldtym").innerHTML = arrPckgs[rsltshow].datetym;
		imagz = arrPckgs[rsltshow].img;
		$("#pflbckg").css("background-image", "url('" + imagz + "')");
		},100);
	}
	
	function createVehicleMarker(vehicle,vehicleId) {	
	var nwfr;
	if(vehicle.order.fare != "GET QUOTE"){
		nwfr = convcurr+" "+String(Math.round((vehicle.order.fare)/conval));	
	}else{
		nwfr = "GET QUOTE";
	}
	arrPckgs.push({
		status:"Not Approved Yet",
		img: vehicle.img.img64,
		id: vehicle.order.id,
		fare: nwfr,
		pickuplat: vehicle.order.pickuplat,
		pickuplng: vehicle.order.pickuplng,
		delvlat: vehicle.order.delvlat,
		delvlng: vehicle.order.delvlng,
		delv: vehicle.order.deliveryarea,
		size: vehicle.order.pckgsize,
		weight:vehicle.order.pckgweight,
		date: vehicle.order.deliverydate,
		time: vehicle.order.deliverytime,
		datetym: vehicle.order.deliverydate+" " + vehicle.order.deliverytime,
		pickup: vehicle.order.pickuparea,
		pickupname: vehicle.order.pickupname,
		pickupnum: vehicle.order.pickupnum,
		delvname: vehicle.order.deliveryname,
		delvnum: vehicle.order.deliverynum,		
		pickupaddr: vehicle.order.pickupaddr,
		deliveryaddr: vehicle.order.deliveryaddr,
		usrid: vehicle.order.usrid,
        usrname: vehicle.order.usrname,
		usrphn: vehicle.order.usrphone,
        sortable: true
    });
	}
	
	function getReverseGeocodingData(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    // This is making the Geocode request
    var geocoder = new google.maps.Geocoder();
	// geoPosition.getCurrentPosition(function(r){
        var findResult = function(results, name){
            var result =  _.find(results, function(obj){
                return obj.types[0] == name && obj.types[1] == "political";
            });
            return result ? result.short_name : null;
        };
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var address = (results[0].formatted_address);
			if(ntfnd==1){
				ntfnd=0;
			}else{
			document.getElementById("locasion").innerHTML = address;				
			}
			var country = findResult(results[0].address_components, "country");
			/*
			if(country == 'IN'){
				conval = 1; convcurr = "INR";
			}else if(country == "IT" || country == "GR" || country == "FR" || country == "ES" || country == "PL" || country == "BE" || country == "DE" ||country == "IE" || country == "PT" || country == "CH" || country == "TR" || country == "UA" || country == "DK" || country == "NL"){
				conval = 70; convcurr = "EUR";
			}else if(country == "GB"){
				conval = 90; convcurr = "GBP";
			}else if(country == "JP"){
				conval = 0.6; convcurr = "JPY";
			}else{
				conval = 60; convcurr = "USD";
			}
			*/
			revrsdone = 1;
        }
    });
	}
	
	function findAndRemove(array, property, value) {
	array.forEach(function(result, index) {
    if(result[property] === value) {
      array.splice(index, 1);
    }    
	});
	}
	
	function insurance(){
		if (document.getElementById('chkbx').checked) {
      document.getElementById('chkval').innerHTML = "More than Rs. 5000";
	  pckgvalue = "More than Rs. 5000";
		} else { document.getElementById('chkval').innerHTML = "Less than Rs. 5000";
		pckgvalue = "Less than Rs. 5000";
		}
	}
	
	function showVal(newVal){
		var cars = ["","Less than 1 Kg", "1 Kg - 10 Kgs", "10 Kgs to 20 Kgs", "20 Kgs - 30 Kgs", "Above 20 Kgs"];
		document.getElementById("rangeText").innerHTML=cars[newVal]; pckgweight = cars[newVal];
	}
	

	function showPosition(position) {
	setTimeout(function(){
		document.getElementById("loadingcontainer").style.display="none"; document.getElementById("bigcontainer").style.display="block";
	},500);		
		map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
		//setTimeout(function(){document.getElementsByTagName("body")[0].style.display='block'},100);
		map.setZoom(11); ntfnd = 0;		
		getReverseGeocodingData(position.coords.latitude, position.coords.longitude);
		geoQuery.updateCriteria({center: [position.coords.latitude, position.coords.longitude],  radius: 30});
		if (showthetour==1) showtour();
		
		$('body').plainOverlay('show',{
			opacity:0.8,
			fillColor: '#000',
			progress: function() { return $('<div style="font-size:40px;color:#fff;font-weight:bold">Loading...</div>'); }
		});
	}
	
	function showtour(){		
		var tourinterval = setInterval(function(){
		
		var tour = new Tour({
        storage: false,		
		steps: [
         {
    orphan: true,
    title: "What is BECK Friends?",
	backdrop:true,
    content: "You can do two things with it. Send anything anwhere or Earn as you travel"
  },   {
    element: "#locasion", 
    title: "Change Locations",
	placement: "bottom",
	backdrop:true,
    content: "Search various places to see the Requests there"
  },
  {
    element: "#map", 
    title: "Live Requests",
	placement: "bottom",
	backdrop:true,
    content: "The details of Live Requests appear here. Use the left and right arrow to navigate across them"
  },
  {
    element: "#add",
    title: "New Request",
	placement: "bottom",
	backdrop:true,
    content: "You can post a Request when you want to send anything anywhere"
  },
  {
    element: "#signleft",
    title: "Login",	
	placement: "bottom",
	backdrop:true,
    content: "Finally, Login with Facebook for posting with us"
  }
        ]
    }).init().start(true);   
	clearInterval(tourinterval);
		},1000);
	}
   
	function onerror(err){		
		ntfnd = 1;  loadauto2();
		setTimeout(function(){
		 document.getElementById("loadingcontainer").style.display="none"; document.getElementById("bigcontainer").style.display="block";
	},1000);			
	}
	
	function loadauto2(){
	myNavigator.pushPage('page5.html', { animation : 'none' } );	
	setTimeout(function(){
	var input = (document.getElementById('pac-input2'));
	var autocomplete = new google.maps.places.Autocomplete(input);	
	autocomplete.addListener('place_changed', function() {
	var place = autocomplete.getPlace();
	if (!place.geometry) {
		swal({   title: "Location Error",   text: "Sorry could not find the location. Please search again",   type: "error",   confirmButtonText: "OK" });
       myNavigator.popPage('page5.html', { animation : 'none' } );	
    }
   
	center = place.geometry.location;    
    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
		(place.address_components[1] && place.address_components[1].short_name || ''), 
        (place.address_components[2] && place.address_components[2].short_name || '')      
      ].join(' ');
	  getReverseGeocodingData(center.lat(), center.lng());
	document.getElementById("locasion").innerHTML=address;
	 map.setCenter(center);map.setZoom(11); //ntfnd=0;
	myNavigator.popPage('page5.html', { animation : 'none' } );	
	setTimeout(function(){
		  google.maps.event.trigger(map, 'resize');
		 map.setCenter(center);map.setZoom(11);
		geoQuery.updateCriteria({center: [center.lat(), center.lng()],  radius: 30});
		if (showthetour==1) showtour();
		$('body').plainOverlay('show',{
			opacity:0.8,
			fillColor: '#000',
			progress: function() { return $('<div style="font-size:40px;color:#fff;font-weight:bold">Working...</div>'); }
		});
	  },1500)
    }	
	});		
	},1000);	
	}
	var markrz1,markrz2;
	
		geoQuery.on("ready", function() {
	nofkeys = Object.keys(vehiclesInQuery).length;
	if(nofkeys==0 && geoQuery.radius()>1){
		if (geoQuery.radius()==15){
			geoQuery.updateCriteria({radius: 30});
		}else if (geoQuery.radius()==30){
			geoQuery.updateCriteria({radius: 60});
		}else{
		$('body').plainOverlay('hide');
		setTimeout(function(){swal({   title: "No Live Requests",   text: "Presently there are no live requests around this location. You can add a request here if you want or search live requests for another location",   type: "warning", showCancelButton: false });
		},3000);
		document.getElementById("rqstgist").style.display="none";
		}
		
	}
	var interval = setInterval(function(){
	if(arrPckgs.length == nofkeys && nofkeys!=0 && acceptsloaded==1){			
		clearInterval(interval); $('body').plainOverlay('hide');
		if(flgg==0)
		{flgg=1;
		}
		for (var key in arraccepts) {forcekeyexit(arraccepts[key])};
		arrPckgs.sort(function(a, b) {
			if(String(b.fare).split(" ")[1]=="QUOTE"){
				return 0 - parseInt(Number(String(a.fare).split(" ")[1]));
			}else if(String(a.fare).split(" ")[1]=="QUOTE"){
				return parseInt(Number(String(b.fare).split(" ")[1])) - 0;
			}
			else{
				return parseInt(Number(String(b.fare).split(" ")[1])) - parseInt(Number(String(a.fare).split(" ")[1]));
			}		
		});
		nofkeys = arrPckgs.length;
		if(nofkeys==0){
			$('body').plainOverlay('show',{
			opacity:0.8,
			fillColor: '#000',
			progress: function() { return $('<div style="font-size:40px;color:#fff;font-weight:bold">Searching...</div>'); }
		});
			document.getElementById("pckgctr").innerHTML = "Searching More...";
			document.getElementById("rqstgist").style.display="none";
			rfrshresults(mycenter);
			for (var i = 0; i < hotSpotMapMarkers.length; i++)
			hotSpotMapMarkers[i].setMap(null);
		   google.maps.event.trigger(map, 'resize');
		  rsltshow = 0;
		  if(path) path.setMap(null);
		  map.setCenter(mycenter);map.setZoom(12);ntfnd=0;
			if (geoQuery.radius()==15){
			geoQuery.updateCriteria({radius: 30});
		}else if (geoQuery.radius()==30){
			geoQuery.updateCriteria({radius: 60});
		}else{
		$('body').plainOverlay('hide');
		document.getElementById("pckgctr").innerHTML = "No Requests Found";
		setTimeout(function(){swal({   title: "No Live Requests",   text: "Presently there are no live requests around this location. You can add a request here if you want or search live requests for another location",   timer: 8000 })},3000);		
		}	
    	}else{
			
			$('body').plainOverlay('hide'); 
			document.getElementById("prevbtn").style.display="none"; showreslt(0);
			drawroute(arrPckgs[0].pickuplat, arrPckgs[0].pickuplng, arrPckgs[0].delvlat, arrPckgs[0].delvlng);	
		}
		
	}	
	
	},3000);
	});	
	
	function showbasic(){
		calcpercent();
		document.getElementById("basic").style.display="block";
		document.getElementById("profile_bit").style.display="block";
		document.getElementById("routes").style.display="none";
		document.getElementById("verf").style.display="none";
	}
	
	function showverf(){
		document.getElementById("basic").style.display="none";
		document.getElementById("profile_bit").style.display="none";
		document.getElementById("routes").style.display="none";
		document.getElementById("verf").style.display="block";
	}
	
	function showroutes(){
		document.getElementById("basic").style.display="none";
		document.getElementById("profile_bit").style.display="none";
		document.getElementById("routes").style.display="block";
		document.getElementById("verf").style.display="none";
	}
	
	function rfrshresults(center){
		$('body').plainOverlay('show',{
			opacity:0.8,
			fillColor: '#000',
			progress: function() { return $('<div style="font-size:40px;color:#fff;font-weight:bold">Working...</div>'); }
		});
			for (var i = 0; i < hotSpotMapMarkers.length; i++)
			hotSpotMapMarkers[i].setMap(null);
		  document.getElementById("rqstgist").style.display="none";
		  document.getElementById("map").style.height = '100%';
		  google.maps.event.trigger(map, 'resize');
		  rsltshow = 0;
		  path.setMap(null);
		  map.setCenter(center);map.setZoom(12); ntfnd=0;		
		  geoQuery.updateCriteria({center: [center.lat(), center.lng()],radius:30});
    }
	
	var img="";
	function loadauto(){
	myNavigator.pushPage('page3.html', { animation : 'lift' } );		
	setTimeout(function(){
	var input = (document.getElementById('pac-input'));
	var autocomplete = new google.maps.places.Autocomplete(input);	
	autocomplete.addListener('place_changed', function() {	
	var place = autocomplete.getPlace();
	if (!place.geometry) {
	swal({   title: "Location Error",   text: "Sorry could not find the location. Please search again",   type: "error",   confirmButtonText: "OK" });
    myNavigator.popPage('page3.html', { animation : 'lift' } );	
    }
   
	center = place.geometry.location;    
    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
		(place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')      
      ].join(' ');
	  if(autoflag==0)
	  {
		document.getElementById("locasion").innerHTML = document.getElementById("pac-input").value;
	  myNavigator.popPage('page3.html', { animation : 'lift' } );
	  
	  setTimeout(function(){		  
		rfrshresults(center);
	  },1500)
	}
	else if(autoflag==1){
		document.getElementById("pickuparea").value=document.getElementById("pac-input").value;
		pickuplat = Number((String(center.lat()).split(".")[0])+"."+String((String(center.lat()).split(".")[1]).substr(0,2)+Math.floor(Math.random() * 100)));
		pickuplng = Number(center.lng());
		myNavigator.popPage('page3.html', { animation : 'lift' } );	
	}
	else if(autoflag==2){
		document.getElementById("deliveryarea").value=document.getElementById("pac-input").value;;
		delvlat = center.lat(); delvlng = center.lng();
		myNavigator.popPage('page3.html', { animation : 'lift' } );
	}
	else if(autoflag==3){
		document.getElementById("startarea").value=document.getElementById("pac-input").value;;
		startlat = center.lat(); startlng = center.lng();
		myNavigator.popPage('page3.html', { animation : 'lift' } );
	}
	else if(autoflag==4){
		document.getElementById("endarea").value=document.getElementById("pac-input").value;;
		endlat = center.lat(); endlng = center.lng();
		myNavigator.popPage('page3.html', { animation : 'lift' } );
	}
    }	
	});	
	
	},1000);
	
	}
	
	function startauto(){
		autoflag=0;
		loadauto()
	}
	
	function pickupauto(){
		autoflag=1;
		loadauto()
	}
	
	function delvauto(){
		autoflag=2;
		loadauto()
	}
	
	function startrouteauto(){
		autoflag=3;
		loadauto()
	}
	
	function endrouteauto(){
		autoflag=4;
		loadauto()
	}
	
	var farebrk = 0;
	function showsumm(){		
		if(farebrk==0){
		document.getElementById("summhd").innerHTML = 'HIDE SUMMARY';document.getElementById("summicndwn").style.display="inline";
		document.getElementById("summary").style.display="inline";document.getElementById("summicnryt").style.display="none";
		farebrk = 1;
		}
		else{
		document.getElementById("summhd").innerHTML = 'SHOW SUMMARY';document.getElementById("summicndwn").style.display="none";
		document.getElementById("summary").style.display="none";document.getElementById("summicnryt").style.display="inline";
		farebrk = 0;
		}		
	}
	
	var summbrk = 0;
	function showsummprof(){		
		if(summbrk==0){
		document.getElementById("summhdprf").innerHTML = 'HIDE SUMMARY';document.getElementById("summicndwnprf").style.display="inline";
		document.getElementById("summaryprf").style.display="inline";document.getElementById("summicnrytprf").style.display="none";
		summbrk = 1;
		}
		else{
		document.getElementById("summhdprf").innerHTML = 'SHOW SUMMARY';document.getElementById("summicndwnprf").style.display="none";
		document.getElementById("summaryprf").style.display="none";document.getElementById("summicnrytprf").style.display="inline";
		summbrk = 0;
		}		
	}
	
	function receipt(){
		phoneNumDelv = document.getElementById("deliverynum").value.replace(/[^\d]/g, '');
		if(document.getElementById("deliveryaddr").value=="" || document.getElementById('deliveryarea').value=="" || document.getElementById('deliveryname').value=="" || document.getElementById('deliverynum').value==""){
			swal({   title: "DELIVERY DETAILS",   text: "Please fill all Delivery Details",   type: "error",   confirmButtonText: "OK" });
		}		
		else if(phoneNumDelv.length < 10) {
			swal({   title: "INVALID MOBILE NO.",   text: "Please enter a valid 10-digit mobile number at delivery location",   type: "error",   confirmButtonText: "OK" });
		}
		else if(img===undefined || img == ""){
			swal({   title: "ADD PACKAGE PHOTO",   text: "Please add photo of your package at the top",   type: "error",   confirmButtonText: "OK" });
		}		
		else{
			document.getElementById("rotatebtn").style.display = "none";
			deliveryarea = document.getElementById("deliveryarea").value;
			deliveryname = document.getElementById("deliveryname").value;
			deliverynum = document.getElementById("deliverynum").value;
			deliveryaddr = document.getElementById("deliveryaddr").value;
			deliverydate = document.getElementById("myDate").value;
			deliverytime = document.getElementById("myTime").value;			
			var oneDay = 24*60*60*1000;
			var firstDate = new Date(today);
			var secondDate = new Date(deliverydate);
			var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));					
			var distance = Number(GeoFire.distance([pickuplat,pickuplng], [delvlat,delvlng]));			
			if(distance<=2000){	
		var pickupLocation = pickuplat+", "+pickuplng; var deliveryLocation = delvlat+", "+delvlng;
		var request = {
       origin: pickupLocation, 
       destination: deliveryLocation,
       travelMode: google.maps.DirectionsTravelMode.DRIVING 
   };	
	directionsService.route(request, function(response, status) {
	
	if (status == google.maps.DirectionsStatus.OK) { 
		var route = Number(response.routes[0].legs[0].distance.value);
	if(distance<=60){	
		if(diffDays==0){
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(route*0.008));
				}
				else if(pckgsize == 'MEDIUM (FITS IN CAR)'){
					fare=String(Math.round(route*0.01));
				}
				else if(pckgsize == 'LARGE (FITS IN VAN)'){
					fare=String(Math.round(route*0.014));
				}
				else{
					fare=String(Math.round(route*0.024));
				}				
			}
			else if(diffDays>=1 && diffDays<=3){
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(route*0.007));
				}
				else if(pckgsize == 'MEDIUM (FITS IN CAR)'){
					fare=String(Math.round(route*0.009));
				}
				else if(pckgsize == 'LARGE (FITS IN VAN)'){
					fare=String(Math.round(route*0.012));
				}
				else{
					fare=String(Math.round(route*0.021));
				}				
			}else if(diffDays>3 && diffDays<=7){
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(route*0.005));
				}
				else if(pckgsize == 'MEDIUM (FITS IN CAR)'){
					fare=String(Math.round(route*0.007));
				}
				else if(pckgsize == 'LARGE (FITS IN VAN)'){
					fare=String(Math.round(route*0.008));
				}
				else{
					fare=String(Math.round(route*0.015));
				}					
			}else{
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(route*0.004));
				}
				else if(pckgsize == 'MEDIUM (FITS IN CAR)'){
					fare=String(Math.round(route*0.005));
				}
				else if(pckgsize == 'LARGE (FITS IN VAN)'){
					fare=String(Math.round(route*0.007));
				}
				else{
					fare=String(Math.round(route*0.012));
				}					
			}
	}
	else{
	if(diffDays==0){			
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(200 + distance*0.75));
				}				
				else{
					fare="GET QUOTE";
				}				
			}
			else if(diffDays>0 && diffDays<=3){				
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(175 + distance*0.5));
				}
				else{
					fare="GET QUOTE";
				}					
			}else if(diffDays>3 && diffDays<=7){				
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(150 + distance*0.5));
				}
				else{
					fare="GET QUOTE";
				}					
			}else{				
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(125 + distance*0.25));
				}
				else{
					fare="GET QUOTE";
				}					
			}
	}   
   }})						
			}else{
			if(diffDays<3){
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(distance*0.75));
				}else{
					fare="GET QUOTE";
				}				
			}
			else if(diffDays>=3 && diffDays<=7){
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(distance*0.5));
				}else{
					fare="GET QUOTE";
				}			
			}else if(diffDays>7 && diffDays<=31){
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(distance*0.4));
				}else{
					fare="GET QUOTE";
				}				
			}else{
				if(pckgsize == 'SMALL (FITS IN BAG)'){
					fare=String(Math.round(distance*0.25));
				}else{
					fare="GET QUOTE";
				}				
			}
			};	
			myNavigator.pushPage('page2.html', { animation : 'push' } );
			setTimeout(function(){
				var newfrconv = "";
				if(fare!="GET QUOTE"){
				newfrconv = convcurr+" "+ Math.round(fare/conval);
				}
				else{
				newfrconv = "GET QUOTE";
				}
				deliverydate = reformatDate(deliverydate);			
				document.getElementById("fare").innerHTML = newfrconv;
				document.getElementById("postbtn").style.display = "block";
				document.getElementById("card2").style.backgroundImage = "url('"+img64+"')";
				document.getElementById("pickupareasumm").innerHTML = pickuparea;
				document.getElementById("pickupdetsumm").innerHTML = pickupaddr;
				document.getElementById("delvareasumm").innerHTML = deliveryarea;
				document.getElementById("delvdetsumm").innerHTML = deliveryaddr;			
				document.getElementById("datetymsumm").innerHTML =  deliverytime+" on "+deliverydate;
				fare2 = newfrconv;				
			},3500)			
		}		
	}
	var fare2="";
	function resizeImage(img) {
    img64 = imageToDataUri(img);		
	document.getElementById("packagephoto").style.display = "none";
    document.getElementById("card").style.backgroundImage = "url('"+img64+"')";
	document.getElementById("card").style.backgroundSize = "contain"; document.getElementById("card").style.backgroundPosition = "center"; document.getElementById("card").style.backgroundRepeat = "no-repeat";
	}
	
	
	function resizeImage2(img) {
    verf1 = imageToDataUri(img);			
		setTimeout(function(){
		if(verf1=="" || verf1=="data:," || verf1=="data:image/jpeg;"){
		verf1="";
		sweetAlert("Oops...", "There is some problem uploading this image. Please Try this image again or another one that is similar", "error");
		}else{
		document.getElementById("verfwrt").style.display = "none";
        document.getElementById("verifbckg1").style.background = "url('"+verf1+"') center/contain no-repeat";
		firebaseRef.child("users").child(usrid).child("account").child("idforverify").update({first:verf1});
		setTimeout(function(){
		swal("Good job!", "First verification document uploaded! We shall let you know once it's approved", "success");
		},2000)
		}
		},2000)
	}
	
	function resizeImage3(img) {
    verf2 = imageToDataUri(img);			
		setTimeout(function(){
		if(verf2=="" || verf2=="data:," || verf2=="data:image/jpeg;"){
		verf2="";
		sweetAlert("Oops...", "There is some problem uploading this image. Please Try this image again or another one that is similar", "error");
		}else{
		document.getElementById("verfwrt2").style.display = "none";
        document.getElementById("verifbckg2").style.background = "url('"+verf2+"') center/contain no-repeat";
		firebaseRef.child("users").child(usrid).child("account").child("idforverify").update({second:verf2});
		setTimeout(function(){
		swal("Good job!", "Second verification document uploaded! We shall let you know once it's approved", "success");
		},2000);
		}
		},2000)
	}
	
	
	var phoneNumPick, phoneNumDelv;
	function showdelivery(){
		phoneNumPick = document.getElementById("pickupnum").value.replace(/[^\d]/g, '');
		if(document.getElementById("pickupaddr").value=="" || document.getElementById('pickuparea').value=="" || document.getElementById('pickupname').value=="" || document.getElementById('pickupnum').value==""){
			swal({   title: "PICKUP DETAILS",   text: "Please fill all Pickup Details",   type: "error",   confirmButtonText: "OK" });
		}		
		else if(phoneNumPick.length < 10) {
			swal({   title: "INVALID MOBILE NO.",   text: "Please enter a valid 10-digit mobile number at pickup location",   type: "error",   confirmButtonText: "OK" });
		}
		else{
		pickuparea = document.getElementById("pickuparea").value;
		pickupname = document.getElementById("pickupname").value;
		pickupnum = document.getElementById("pickupnum").value;
		pickupaddr = document.getElementById("pickupaddr").value;
		document.getElementById("packagedetails").style.display="none";
		document.getElementById("pickupdetails").style.display="none";
		document.getElementById("deliverydetails").style.display="block";
		document.getElementById("timebtn").style.background="#00b100";		
		document.getElementById("pickupbtn").style.background="#00b100";
		document.getElementById("deliverybtn").style.background="#00b100";
		document.getElementById("timedetails").style.display="none";
		}		
	}
	
	function makeid(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
	}
	
	function tConvert (time) {
	time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
	if (time.length > 1) {
    time = time.slice (1);
    time[5] = +time[0] < 12 ? 'am' : 'pm';
    time[0] = +time[0] % 12 || 12;
	}
	return time.join ('');
	}
	
	function reformatDate(dateStr){
		deliverydate = new Date(dateStr).getTime();
		return moment(deliverydate).format('ll');
	}
		
	var fbflag,clicklogin=0;
	
	function editnum(){
		if(loggedin==1){swal({   title: "Change number",   text: "Your present registered number is +"+usrphone+". Are you sure you want to change it?", html: true,   type: "warning",   showCancelButton: true,   confirmButtonColor: "#2bb1de",   confirmButtonText: "Change it",   closeOnConfirm: false }, function(){ smsending() })}else{sidebar.toggleMenu();$('#signleft').click()};
	}	
	function editnum(){
		if(loggedin==1){
		if(usrphone){
			swal({   title: "Change number",   text: "Your present registered number is +"+usrphone+". Are you sure you want to change it?", html: true,   type: "warning",   showCancelButton: true,   confirmButtonColor: "#2bb1de",   confirmButtonText: "Change it",   closeOnConfirm: false }, function(){ smsending() })
		}
		else {
			swal({   title: "Update number",   text: "Please update to your latest contact number", html: true,   type: "warning",   showCancelButton: true,   confirmButtonColor: "#2bb1de",   confirmButtonText: "Update it",   closeOnConfirm: false}, function(){ smsending() })
		}
		}
		else{
			('#signleft').click();
		}
	}
	
	function openprofile(){
		if(loggedin==1){ sidebar.toggleMenu(); openprofileryt() }else{ sidebar.toggleMenu(); $('#signleft').click() }
	}
	
	function openprofileryt(){
		setTimeout(function(){ myNavigator.pushPage('profile.html', { animation : 'push' } ); 
		setTimeout(function(){ 
		startApp(); calcpercent(); document.getElementById("profile_name2").innerHTML = usrname;  document.getElementById("prfimg2").src = usrimg; 
		
	document.getElementById("verf1").onchange = function () {
	if(unverf==0){
    reader2 = new FileReader();
    reader2.onload = function (e) {
	var imgbckz = new Image();
	imgbckz.src = String(e.target.result);
	imgbckz.onload = function(){
	resizeImage2(imgbckz)	
	};
	};
    reader2.readAsDataURL(this.files[0]);
	}else{
		sweetAlert("Oops...", "Please verify your Email first!", "error");
		}
	}	
	
	document.getElementById("verf2").onchange = function () {
	if(unverf==0){
    reader3 = new FileReader();
    reader3.onload = function (e) {
	var imgbckz = new Image();
	imgbckz.src = String(e.target.result);
	imgbckz.onload = function(){
	resizeImage3(imgbckz)	
	};
	};
    reader3.readAsDataURL(this.files[0]);
	}else{
		sweetAlert("Oops...", "Please verify your Email first!", "error");
		}
	}
	},500);
		},200)
	}
	
	function smsending(){
		if(loggedin==1){
				swal({title: "Mobile Verification", text: "", type: "input", closeOnConfirm: false, animation: "slide-from-top",   inputPlaceholder: "Your 10-digit mobile number" }, 				
				function(inputValue){
				if((inputValue.length == 11) && (inputValue[0] == '0')){
					inputValue = inputValue.substr(1,inputValue.length);
				};
				var number = inputValue.replace(/[^\d]/g, '').length;
				if (inputValue === false) return false; 
				if (number != 10) {swal.showInputError("Please Enter your 10 digit mobile number (without adding zero in the beginning) and select your country code");     return false   }
				if (String(document.getElementById("countrycd").value)+String(inputValue.replace(/[^\d]/g, '')) == String(usrphone)) {swal.showInputError("Please do not enter the existing registered mobile number");     return false   }
				var intno = String(document.getElementById("countrycd").value)+String(inputValue.replace(/[^\d]/g, ''));
				if(document.getElementById("countrycd").value == '91'){
					otpcall(intno);
				}else{
					otpintcall(intno);
				}
						
				swal({title: "Enter OTP", text: "Please enter the 4 digit OTP sent as SMS",   type: "input",   showCancelButton: false,   closeOnConfirm: false,   animation: "slide-from-top",   inputPlaceholder: "OTP (One Time Password)" }, 
				function(inputValue2){
				var number = inputValue.replace(/[^\d]/g, '').length ;
				if (inputValue === false) return false; 
				if (otp != inputValue2) {     swal.showInputError("Please Enter the correct 4 digits");     return false   }
				firebaseRef.child("users").child(usrid).child("account").update({
					usrphone:intno
				});				
				usrphone = intno;
				swal("Update Succesful", "Congratulations. You have succesully updated your mobile number", "success"); 
				loggedin = 1; $('#myanchor').click();					
				});
				});	
				$(".sweet-alert p").html('<br>Please select your country and enter your mobile number<br>&nbsp;<br><select id="countrycd" style="padding:5px;font-size:14px; font-family:\'Maven Pro\', sans-serif;"><option data-countryCode="FR" value="33">France (+33)</option><option data-countryCode="DE" value="49">Germany (+49)</option><option data-countryCode="GR" value="30">Greece (+30)</option><option data-countryCode="HU" value="36">Hungary (+36)</option><option data-countryCode="IN" value="91" selected>India (+91)</option><option data-countryCode="ID" value="62">Indonesia (+62)</option><option data-countryCode="IT" value="39">Italy (+39)</option><option data-countryCode="JP" value="81">Japan (+81)</option><option data-countryCode="MY" value="60">Malaysia (+60)</option><option data-countryCode="MX" value="52">Mexico (+52)</option><option data-countryCode="MN" value="95">Myanmar (+95)</option><option data-countryCode="NL" value="31">Netherlands (+31)</option><option data-countryCode="NZ" value="64">New Zealand (+64)</option><option data-countryCode="PE" value="51">Peru (+51)</option><option data-countryCode="PH" value="63">Philippines (+63)</option><option data-countryCode="PL" value="48">Poland (+48)</option><option data-countryCode="RO" value="40">Romania (+40)</option><option data-countryCode="SG" value="65">Singapore (+65)</option><option data-countryCode="ZA" value="27">South Africa (+27)</option><option data-countryCode="ES" value="34">Spain (+34)</option><option data-countryCode="LK" value="94">Sri Lanka (+94)</option><option data-countryCode="SE" value="46">Sweden (+46)</option><option data-countryCode="CH" value="41">Switzerland (+41)</option><option data-countryCode="TH" value="66">Thailand (+66)</option><option data-countryCode="TR" value="90">Turkey (+90)</option><option data-countryCode="GB" value="44">UK (+44)</option></select>');
			}
			else{
				befrlogin();
			}
	}
	
	function checkfirebase(email){
		usrnewmail = String(email).replace(/[^a-zA-Z0-9]/g, ' ');
		firebaseRef.child("users").child(usrnewmail).child("account").once("value", function(snapshot) {			
			if(snapshot.val()){
				usrname = snapshot.child("usrname").val();
				usremail=  snapshot.child("usremail").val();
				usrphone = snapshot.child("usrphone").val();
				usrid = snapshot.child("usrid").val();
				usrimg = snapshot.child("usrimg").val(); document.getElementById("profile_img").src = usrimg;
				loggedin = 1; document.cookie = "beckusrmail="+usremail+"; expires=Wed, 14 Feb 2029 12:00:00 UTC";
				document.getElementById("namehdr").innerHTML = 'Hi ' + usrname.split(" ")[0].substring(0, 10); document.getElementById("mnulogin").style.display = "none";	document.getElementById("mnuloggedin").style.display = "block";	 
				document.getElementById("profile_name").innerHTML = usrname; document.getElementById("signleft").style.display = "none"; document.getElementById("namehdr").style.display = "inline";
				
			}		
		});
	}
	
	function checkfirebasefb(usremail,usrfbimg,usrname,usrfbid){		
		usrnewmail = String(usremail).replace(/[^a-zA-Z0-9]/g, ' ');
		$('body').plainOverlay('show',{
			opacity:0.8,
			fillColor: '#000',
			progress: function() { return $('<div style="font-size:40px;color:#fff;font-weight:bold">Working...</div>'); }
		});
		firebaseRef.child("users").child(usrnewmail).child("account").once("value", function(snapshot){		
				
			if(snapshot.val()){
				usrname = snapshot.child("usrname").val();
				usremail=  snapshot.child("usremail").val();
				usrphone = snapshot.child("usrphone").val();
				usrid = snapshot.child("usrid").val();
				usrimg = snapshot.child("usrimg").val(); document.getElementById("mnulogin").style.display = "none";	document.getElementById("mnuloggedin").style.display = "block";	
				loggedin = 1; document.cookie = "beckusrmail="+usremail+"; expires=Wed, 14 Feb 2029 12:00:00 UTC"; $('#myanchor').click();
				if(postctr==1){ $("#posting").click(); postctr=0; }else if(acceptctr==1){ $("#accepting").click(); acceptctr=0};
				document.getElementById("profile_img").src = usrimg; document.getElementById("namehdr").innerHTML = 'Hi ' + usrname.split(" ")[0].substring(0, 10);		 
				document.getElementById("profile_name").innerHTML = usrname; document.getElementById("signleft").style.display = "none"; $('body').plainOverlay('hide'); document.getElementById("namehdr").style.display = "inline";
				if(snapshot.child("idforverify").child("first").val()){
					document.getElementById("verifbckg1").style.background = "url('"+snapshot.child("idforverify").child("first").val()+"') center/contain no-repeat";
					document.getElementById("verfwrt").style.display = "none";
				}
				if(snapshot.child("idforverify").child("second").val()){
					document.getElementById("verifbckg2").style.background = "url('"+snapshot.child("idforverify").child("second").val()+"') center/contain no-repeat";
					document.getElementById("verfwrt2").style.display = "none";
				}
			}
			else{
			if(unverf == 1){
			firebaseRef.child("unverified").child(usrnewmail).child("account").child("facebook").update({fbimg:usrfbimg, name:usrname, email:usremail, id:usrfbid, fbid:usrfbid});
			firebaseRef.child("unverified").child(usrnewmail).child("account").update({usrimg:usrfbimg,usrname:usrname, usremail:usremail, usrid:usrnewmail, completed:0});	
			}else{
			firebaseRef.child("users").child(usrnewmail).child("account").child("facebook").update({fbimg:usrfbimg, name:usrname, email:usremail, id:usrfbid, fbid:usrfbid});
			firebaseRef.child("users").child(usrnewmail).child("account").update({usrimg:usrfbimg,usrname:usrname, usremail:usremail, usrid:usrnewmail, completed:0});	
			document.cookie = "beckusrmail="+usremail+"; expires=Wed, 14 Feb 2029 12:00:00 UTC";
			}
			$('#myanchor').click();
			usrimg = snapshot.child("usrimg").val(); document.getElementById("profile_img").src = usrimg; $('body').plainOverlay('hide');	
			document.getElementById("namehdr").innerHTML = 'Hi ' + usrname.split(" ")[0].substring(0, 10);
			document.getElementById("profile_name").innerHTML = usrname; document.getElementById("signleft").style.display = "none"; document.getElementById("namehdr").style.display = "inline";
			}			
		});
	}
	
	
	function otpintcall(number){
	otp = Math.floor((Math.random() * 900) + 1000);	
	$.ajax({
      url: 'https://www.beckme.in/otpint.php',
      data:
      {
        phoneNumber : number,
        randomNumber : otp + ' is your OTP (One Time Password) for Beck. Please use the password to complete your Registration.'
      },
      error: function(error) {
     // console.log(JSON.stringify(error));
        },
      success: function(data) {
       //console.log(JSON.stringify(data));
       },
      type: 'POST'
	});
	}
		
	function otpcall(number){
	otp = Math.floor((Math.random() * 900) + 1000);
	$.ajax({
      url: 'https://www.beckme.in/otp.php',
      data:
      {
        phoneNumber : number,
        randomNumber : otp + ' is your OTP (One Time Password) for Beck. Please use the password to complete your Registration.'
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
       //console.log(JSON.stringify(data));
       },
      type: 'POST'
	});
	}
	
	function accept(){	
	clicklogin=1;
	if(loggedin==1){
		myNavigator.pushPage('accept.html', { animation : 'none' } );
		var interval = setInterval(function(){
		if(typeof usrphone === 'undefined'){}
		else{
		clearInterval(interval);
		smsacceptdm(arrPckgs[rsltshow].usrphn);
		smsacceptsupp(usrphone);
		var actionz = "BECK friend "+ usrname +" accepted a new order: " + arrPckgs[rsltshow].id;
		mailcall(actionz,usremail,usrphone);	
		setTimeout(function(){
		myNavigator.popPage('accept.html', { animation : 'none' } );
		myNavigator.popPage('page4.html', { animation : 'none' } );
		google.maps.event.trigger(map, 'resize');
		swal("Succesfully Accepted", "The details of the request you accepted has been sent you through SMS", "success")
		},1500)
		};		
		},2000);		
		}
		else{
			fbflag = 1;
			befrlogin();
		}			
	}
	function befrlogin2(){
		$("#pseudologin").click();
		swal({ title: "Love to have you on board",   text: "Enter into your BECK Friends Account with Facebook",   type: "success",   showCancelButton: true,   confirmButtonColor: "#2bb1de",   confirmButtonText: "Go Ahead" }, function(){login()});		
	}
	
	function befrlogin(){
		$("button[data-role='end']").click();
		swal({ title: "Love to have you on board",   text: "Enter into your BECK Friends Account with Facebook",   type: "success",   showCancelButton: true,   confirmButtonColor: "#2bb1de",   confirmButtonText: "Go Ahead" }, function(){login()});		
	}
	
  function smsacceptdm(number){
	if(String(number).substring(0, 2) == '91'){
					//otpcall(inputValue);
	  $.ajax({
      url: 'https://www.beckme.in/otp.php',
      data:
      {
        phoneNumber : number,
        randomNumber : 'Your request has been accepted by your BECK friend '+String(usrname).split(" ")[0].substring(0, 30)+'. You can approve this request from your profile'
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
        //console.log("01"+JSON.stringify(data));
       },
      type: 'POST'
	});
	}else{
	$.ajax({
      url: 'https://www.beckme.in/otpint.php',
      data:
      {
        phoneNumber : number,
        randomNumber : 'Your request has been accepted by your BECK friend '+String(usrname).split(" ")[0].substring(0, 30)+'. You can approve his request from your profile at www.beckfriends.com'
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
       //console.log("02"+JSON.stringify(data));
       },
      type: 'POST'
	});
	}
	}
	
	function smsacceptsupp(number){	
	if(String(number).substring(0, 2) == '91'){
	$.ajax({
      url: 'https://www.beckme.in/otp.php',
      data:
      {
        phoneNumber : number,
        randomNumber : 'Thanks for accepting the request of your BECK friend '+String(arrPckgs[rsltshow].usrname).split(" ")[0].substring(0, 10)+'. We will notify you once it has been approved. You can check the status from your profile'
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
       //console.log("11"+JSON.stringify(data));
       },
      type: 'POST'
	});
	}else{
	$.ajax({
      url: 'https://www.beckme.in/otpint.php',
      data:
      {
        phoneNumber : number,
        randomNumber : 'Thanks for accepting the request of your BECK friend '+arrPckgs[rsltshow].split(" ")[0].usrname+'. We will notify you once it has been approved. You can check the status from your profile.'
      },
      error: function(error) {
      //console.log(JSON.stringify(error));
        },
      success: function(data) {
       //console.log("12"+JSON.stringify(data));
       },
      type: 'POST'
	});
	}
	}	

	function post(){	
		myNavigator.pushPage('request.html', { animation : 'none' } );
		var orderid = makeid();
		deliverytime = tConvert(deliverytime);	
		if(document.getElementById("descriptor").value != ""){
			description = document.getElementById("descriptor").value;
		}
		
		firebaseRef.child("packages").child(orderid).update({order:{img64:img64,description:description,id:orderid,lat:pickuplat,lon:pickuplng,usrid:usrid,usrphone:usrphone,usrname:usrname,usremail:usremail,pickuplat:pickuplat,pickuplng:pickuplng, delvlat:delvlat, delvlng:delvlng, pickuparea:pickuparea, pickupaddr:pickupaddr, pickupname:pickupname, pickupnum:pickupnum, deliveryaddr:deliveryaddr, deliveryarea:deliveryarea, deliverynum:deliverynum, deliveryname:deliveryname,deliverydate:deliverydate,deliverytime:deliverytime, pckgvalue:pckgvalue, pckgweight:pckgweight,pckgsize:pckgsize,fare:fare}},function(error){
		if (error) {
			myNavigator.popPage('request.html', { animation : 'none' } );
			swal({   title: "POST FAILED",   text: "Oops! Failed to post. Please try again",   type: "error",   confirmButtonText: "OK" });
		} else {
			var actionz = "BECK friend "+ usrname +" requested a new order: " + orderid;
			mailcall(actionz,usremail,usrphone);			
		}
		});
		var orderid2 = orderid+"D";
		firebaseRef.child("packages").child(orderid).update({img:{img64:img64}}).then(function() {
		firebaseRef.child("users").child(usrid).child("posts").child(orderid).update({status:"Waiting for Accept",img64:img64,description:description,id:orderid,lat:pickuplat,lon:pickuplng,usrid:usrid,usrphone:usrphone,usrname:usrname,usremail:usremail,pickuplat:pickuplat,pickuplng:pickuplng, delvlat:delvlat, delvlng:delvlng, pickuparea:pickuparea, pickupaddr:pickupaddr, pickupname:pickupname, pickupnum:pickupnum, deliveryaddr:deliveryaddr, deliveryarea:deliveryarea, deliverynum:deliverynum, deliveryname:deliveryname,deliverydate:deliverydate,deliverytime:deliverytime, pckgvalue:pckgvalue, pckgweight:pckgweight,pckgsize:pckgsize,fare:fare2});
		geoFire.set(orderid, [pickuplat, pickuplng]).then(function() {}, function(error) {
		myNavigator.popPage('request.html', { animation : 'none' } );
		swal({   title: "POST FAILED",   text: "Oops! Failed to post. Please try again",   type: "error",   confirmButtonText: "OK" });
		});
		myNavigator.popPage('request.html', { animation : 'none' } );
		myNavigator.popPage('page2.html', { animation : 'none' } );
		myNavigator.popPage('page1.html', { animation : 'none' } );
		setTimeout(function(){
		google.maps.event.trigger(map, 'resize');
		swal("Succesfully Posted", "Your Request is posted at the pickup location. We shall update you soon!", "success");
		},1000)
		}, function(error) {
		myNavigator.popPage('request.html', { animation : 'none' } );
		swal({   title: "POST FAILED",   text: "Oops! Failed to post. Please try again",   type: "error",   confirmButtonText: "OK" });
		});		
	}
	
	var today;
	function showdatetym(){
		if(pckgsize==""){
			swal({   title: "PACKAGE SIZE",   text: "Please mention the SIZE of your package",   type: "error",   confirmButtonText: "OK" });
		}
		else if(img==""){
			swal({   title: "PACKAGE IMAGE",   text: "Please add an IMAGE of your package",   type: "error",   confirmButtonText: "OK" });
		}
		else{
		today = new Date().toISOString().slice(0, 10);
		document.getElementById("pickupdetails").style.display="none";
		document.getElementById("deliverydetails").style.display="none";
		document.getElementById("packagedetails").style.display="none";
		document.getElementById("timedetails").style.display="block";
		document.getElementById("timebtn").style.background="#00b100";		
		document.getElementById("pickupbtn").style.background="#252525";
		document.getElementById("deliverybtn").style.background="#252525";
		document.getElementById('myDate').valueAsDate = new Date(); document.getElementById("myDate").min = document.getElementById("myDate").value;
		}
		
	}
	
	var reader;
	function addnewrqst(){		
		myNavigator.pushPage('page1.html', { animation : 'push' } );
		setTimeout(function(){img = ""; pckgsize=""
	document.getElementById("files").onchange = function () {
    reader = new FileReader();
    reader.onload = function (e) {
	img = "url('"+e.target.result+"')"; var imgbckz = new Image();
	imgbckz.src = String(e.target.result); document.getElementById("rotatebtn").style.display = "block";
	document.getElementById("jstbtn").style.marginTop="0px";
	imgbckz.onload = function(){
	resizeImage(imgbckz)	
	};
	};
    reader.readAsDataURL(this.files[0]);
	}	
		},1000);
	}
	
	function showpickup(){
		
		if(document.getElementById('myDate').value=="" || document.getElementById('myTime').value==""){
			swal({   title: "Date & Time",   text: "Please fill a date and time for the delivery of your package",   type: "error",   confirmButtonText: "OK" });
		}else if(today >= document.getElementById('myDate').value){
			swal({   title: "Future Date",   text: "You need to select a date in the future from today for delivery",   type: "error",   confirmButtonText: "OK" });
		}
		else if((isValidDate(document.getElementById('myDate').value)) == false){swal({   title: "Invalid Date",   text: "Please select an appropriate date type for delivery",   type: "error",   confirmButtonText: "OK" });}
		else{
		document.getElementById("packagedetails").style.display="none";		
		document.getElementById("pickupbtn").style.background="#00b100";
		document.getElementById("timebtn").style.background="#00b100";
		document.getElementById("pickupdetails").style.display="block";
		document.getElementById("deliverydetails").style.display="none";
		document.getElementById("deliverybtn").style.background="#252525";	
		document.getElementById("timedetails").style.display="none";
		}						
	}
	
	function showpckg(){		
		document.getElementById("pickupbtn").style.background="#252525";
		document.getElementById("timebtn").style.background="#252525";
		document.getElementById("packagedetails").style.display="block";
		document.getElementById("pickupdetails").style.display="none";
		document.getElementById("deliverydetails").style.display="none";
		document.getElementById("deliverybtn").style.background="#252525";	
		document.getElementById("timedetails").style.display="none";				
	}
	
	function imageToDataUri(img) {
	var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'); var wydt = 200 * img.width / img.height;
	canvas.width = wydt; canvas.height = 200;
    ctx.drawImage(img, 0, 0, wydt, 200);
    return canvas.toDataURL('image/jpeg', 0.7);
	}
		
	function lala(){
	$(window).scrollTop($(window).scrollTop()+1);
	setTimeout(function(){	
		$("#pickupname").focus();			
	},500);
	
	document.getElementById('pickupname').addEventListener('keypress', function(event) {
		 if (event.keyCode == 13) {
			  $(window).scrollTop($(window).scrollTop()+1);
       
            $("#pickupaddr").focus();
        }
    });
	document.getElementById('pickupaddr').addEventListener('keypress', function(event) {
		 if (event.keyCode == 13) {
			  $(window).scrollTop($(window).scrollTop()+1);
       
            $("#pickupnum").focus();
        }
    });
	document.getElementById('pickupnum').addEventListener('keypress', function(event) {
		 if (event.keyCode == 13) {
			  $(window).scrollTop($(window).scrollTop()+1);
       
            showdelivery()
        }
    });
	}

	function lala2(){
	setTimeout(function(){
		$("#deliveryname").focus();
	},500);	
	document.getElementById('deliveryname').addEventListener('keypress', function(event) {
		 if (event.keyCode == 13) {
			$(window).scrollTop($(window).scrollTop()+1); $("#deliveryaddr").focus();
        }
    });
	document.getElementById('deliveryaddr').addEventListener('keypress', function(event) {
		 if (event.keyCode == 13) {
			$(window).scrollTop($(window).scrollTop()+1); $("#deliverynum").focus();
        }
    });
	document.getElementById('deliverynum').addEventListener('keypress', function(event) {
		 if (event.keyCode == 13) {
			receipt();
        }
    })
	}

	
	function loginmail(){
		if(document.getElementById("signup-email").value==""||document.getElementById("signup-password").value==""){
			swal({   title: "Insufficient Details",   text: "Oops! Please fill all details for Signing In",   type: "error",   confirmButtonText: "OK" });
			return;
		}
		$('body').plainOverlay('show',{
			opacity:0.8,
			fillColor: '#000',
			progress: function() { return $('<div style="font-size:40px;color:#fff;font-weight:bold">Working...</div>'); }
		});		
		usremail = document.getElementById("signup-email").value;
		passwd = document.getElementById("signup-password").value;
		usrnewmail = String(usremail).replace(/[^a-zA-Z0-9]/g, ' ');
		firebaseRef.authWithPassword({email:usremail, password : passwd}, function(error, authData) {
		if (error) {
			$('body').plainOverlay('hide');
			sweetAlert("Incorrect credentials", "Please try with correct Email & password. If you are a new user, please Sign Up", "error"); return;
		}else{
		firebaseRef.child("users").child(usrnewmail).child("account").once("value", function(snapshot) {			
			if(snapshot.val()){
				usrname = snapshot.child("usrname").val();
				usremail=  snapshot.child("usremail").val();
				usrphone = snapshot.child("usrphone").val();
				usrimg = snapshot.child("usrimg").val();
				usrid = snapshot.child("usrid").val();	
				document.getElementById("mnulogin").style.display = "none";	document.getElementById("mnuloggedin").style.display = "block";	
				loggedin = 1; document.cookie = "beckusrmail="+usremail+"; expires=Wed, 14 Feb 2029 12:00:00 UTC";
				$('#myanchor').click(); $('body').plainOverlay('hide');	if(postctr==1){ $("#posting").click(); postctr=0; }else if(acceptctr==1){ $("#accepting").click(); acceptctr=0};
				document.getElementById("namehdr").innerHTML = 'Hi ' + usrname.split(" ")[0].substring(0, 10);		 
				document.getElementById("profile_name").innerHTML = usrname; document.getElementById("signleft").style.display = "none"; document.getElementById("namehdr").style.display = "inline";
				document.getElementById("profile_img").src = usrimg; $('body').plainOverlay('hide');
			}else{
				$('#signupbtnn').click();
				sweetAlert("New User?", "Are a new user, please Sign Up", "warning"); $('body').plainOverlay('hide');
				return;
			}
	  })
	}
	});
	}
	function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
	}

	var passwd;
	function signupmail(){
		if(document.getElementById("signup-email").value==""||document.getElementById("signup-username").value==""||document.getElementById("signup-password").value==""){
			swal({   title: "Insufficient Details",   text: "Oops! Please fill all details for Signing Up",   type: "error",   confirmButtonText: "OK" });
			return;
		}
		usremail = document.getElementById("signup-email").value;
		if(!validateEmail(usremail)){
			swal({   title: "Incorrect Email",   text: "Oops! Please enter a valid Email address & try again",   type: "error",   confirmButtonText: "OK" });
			usremail="";
			return
		};		
		$('body').plainOverlay('show',{
			opacity:0.8,
			fillColor: '#000',
			progress: function() { return $('<div style="font-size:40px;color:#fff;font-weight:bold">Working...</div>'); }
		});
		usrname = document.getElementById("signup-username").value;
		passwd = document.getElementById("signup-password").value;
		usrnewmail = String(usremail).replace(/[^a-zA-Z0-9]/g, ' ');
		firebaseRef.child("users").child(usrnewmail).once("value", function(snapshot) {
			if(snapshot.val()){
				$('body').plainOverlay('hide');	
				swal({   title: "Email already in use",   text: "Hey! You are already registered with us. Please Login",   timer: 2000,   showConfirmButton: false });		
				$('#signinbtnn').click();		
			}else{
				mailconfirm(usremail,passwd);
				$('body').plainOverlay('hide');
						unverf=1; //swal("Verification Email sent!", "Please click on the link sent to your Email to complete Account Creation", "success");
						firebaseRef.child("unverified").child(usrnewmail).child("account").update({usrimg:usrimg,usrname:usrname, usremail:usremail, usrid:usrnewmail, completed:0});	
						usrid = usrnewmail; var regsclbck = "New user registered on friends : "+usrname+" "+usremail;
						loggedin = 1; 
				if(postctr==1){ $("#posting").click(); postctr=0; }else if(acceptctr==1){ $("#accepting").click(); acceptctr=0};
				document.getElementById("namehdr").innerHTML = 'Hi ' + usrname.split(" ")[0].substring(0, 10);	document.getElementById("mnulogin").style.display = "none";	document.getElementById("mnuloggedin").style.display = "block";		 
				document.getElementById("profile_name").innerHTML = usrname; document.getElementById("signleft").style.display = "none"; document.getElementById("namehdr").style.display = "inline";
				document.getElementById("profile_img").src = usrimg; $('body').plainOverlay('hide');
				$('#myanchor').click();	$("button[data-role='end']").click(); start();		
				
			}; 			
		});
	}
	
function isLocalStorageNameSupported() {
  var testKey = 'test', storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) {
		return c.substring(nameEQ.length,c.length);
		}
	}
    return null;
}

	/* the tempalte after signup
	document.getElementById("namehdr").innerHTML = 'Hi ' + String(response.name).split(" ")[0];
	  document.getElementById("profile_img").src = String(response.picture.data.url);
	  document.getElementById("profile_name").innerHTML = 'Hi ' + usrname.split(" ")[0].substring(0, 10);	
	  usrfbimg = String(response.picture.data.url); usrname = String(response.name); usremail = String(response.email); usrfbid = String(response.id);
	  checkfirebase(usremail); $("button[data-role='end']").click();
	*/
	