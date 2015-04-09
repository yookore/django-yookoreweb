module("Object.create()",{setup:function(){this.obj={foo:1,bar:2};this.child=Object.create(this.obj,{nao:{value:3},baz:{value:4}})}});test("creates an object",1,function(){ok(typeof this.child=="object"&&this.child!==null,"obj is an object")});test("sets the given argument as the prototype of the new object",2,function(){ok(this.child.foo==1,"the 'foo' property is defined to be 1");ok(!this.child.hasOwnProperty("foo"),"child does not have its own 'foo' property")});test("defines properties of the new object based on the given property descriptors",4,function(){ok(this.child.nao==3,"the 'nao' property is defined to be 3");ok(this.child.baz==4,"the 'nao' property is defined to be 3");ok(this.child.hasOwnProperty("nao"),"child has its own 'nao' property");ok(this.child.hasOwnProperty("baz"),"child has its own 'baz' property")});module("Object.keys()",{setup:function(){this.obj={foo:1,bar:2};function a(){this.nao=3}a.prototype=this.obj;this.child=new a();this.inArray=function(b,d){for(var c=0;c<b.length;c+=1){if(b[c]===d){return c}}return -1}}});test("returns the property names of an object",2,function(){ok(this.inArray(Object.keys(this.obj),"foo")>-1,"keys include 'foo'");ok(this.inArray(Object.keys(this.obj),"bar")>-1,"keys include 'foo'")});test("does not return property names inherited from object prototypes",2,function(){ok(this.child.foo==1,"child inherits the 'foo' property");ok(this.inArray(Object.keys(this.child),"foo")==-1,"keys do not include 'foo'")});