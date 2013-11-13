
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var ActiveH6 = {};	// @button
	var Active7H = {};	// @button
	var ActiveAll = {};	// @button
// @endregion// @endlock

	var lastNameSearch = {}; // @search button

// eventHandlers// @lock

	ActiveH6.click = function ActiveH6_click (event)// @startlock
	{// @endlock
		filterH6 = "(Active == true && (Company == 'H6' || Company2 == 'H6' || Company3 == 'H6'))";
		sources.accounts.query(filterH6);
		sources.accounts.orderBy("Last_Name,First_Name");
	};// @lock

	Active7H.click = function Active7H_click (event)// @startlock
	{// @endlock
		filter7H = "(Active == true && (Company == '7H' || Company2 == '7H' || Company3 == '7H'))";
		sources.accounts.query(filter7H);
		sources.accounts.orderBy("Last_Name,First_Name");

	};// @lock

	ActiveAll.click = function ActiveAll_click (event)// @startlock
	{// @endlock
		filterAll = "Active == true";
		sources.accounts.query(filterAll);
		sources.accounts.orderBy("Last_Name,First_Name");

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("ActiveH6", "click", ActiveH6.click, "WAF");
	WAF.addListener("Active7H", "click", Active7H.click, "WAF");
	WAF.addListener("ActiveAll", "click", ActiveAll.click, "WAF");
// @endregion
};// @endlock
