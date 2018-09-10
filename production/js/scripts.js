;(function(){
	
	"use strict";	  
	  
	/*
   * -------------------------------------------------------
   *  TABS
   * -------------------------------------------------------
   */ 	
	function Tabs() {
	  var bindTabs = function() {
		var tabElements = document.querySelectorAll('[data-tab]');
		for(var i = 0; i < tabElements.length ; i++) {
		  tabElements[i].addEventListener('click', addTabClass, false);
		}
	  }
	  var removeTabClass = function() {
		var tabElements = document.querySelectorAll('[data-tab]');
		for(var i = 0; i < tabElements.length ; i++) {
		 tabElements[i].classList.remove('is-active');
		  var id = tabElements[i].getAttribute('data-tab');
		  document.getElementById(id).classList.remove('is-active');
		}
	  }
	  var addTabClass = function(e) {
		removeTabClass();
		e.target.classList.add('is-active');
		var id = e.currentTarget.getAttribute('data-tab');
		document.getElementById(id).classList.add('is-active');
	  }

	  bindTabs();
	}

	var initTabs = new Tabs();
	
	
	
	/*
   * -------------------------------------------------------
   *  MENU
   * -------------------------------------------------------
   */
	const navbarBurger = document.querySelector('.navbar-burger');
	const sidebar = document.querySelector('.sidebar');	
	
	navbarBurger.addEventListener('click', function(event){	
		event.preventDefault();
		sidebar.classList.toggle('is-active');
		this.classList.toggle('is-active');
	});	
	
	
	/*
	* -------------------------------------------------------
   *  DROPDOWN
   * -------------------------------------------------------
   */
	const dropdown = document.querySelector('.dropdown');
	dropdown.addEventListener('click', function(event) {
	  event.stopPropagation();
	  dropdown.classList.toggle('is-active');
	});
	
	
	/*
   * -------------------------------------------------------
   *  STYLE SCROLLBAR FOR SIDEBAR
   * -------------------------------------------------------
   */
	const scrollSidebarYStyle = new PerfectScrollbar(sidebar);
	
	
})();

