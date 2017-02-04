/**
* ���������� ��� ��������� ��������� �������� select.
*/
function automakerSelected() {
	if (!window.automakerLoaded) {
		populateAutomakersSelectElement();
	}
}

/**
* ���������� ��� ��������� ��������� �������� select, � ����� ��� �������������� ���������� �������� �� cookie.
*/
function populateAutomakersSelectElement() {
	DwrService.getAutomakers(getAllAutomakersCallback);
	return false;          
} 

/**
* Callback �������, ����������� ���������� ��� ��������� ������ �������� Automaker � �������.<b>
* ��������� ������� select ������������������, � ����� ������ �����������������. � ������, ���� ������ window.selectedCriteria,
* ���������� ����������� ��������� ����������� ������� ���������, ���������� ��� ��� �������������� ��������.
*/
function getAllAutomakersCallback(automakers){	
	//...	
	populateAllModels(automakers[currentAutomaker]);
	automakerLoaded = true;
	delete window.selectedCriteria;
}

/**
* �� ������� automaker, �������� ��� ��� ������ automaker.models, ��������� select ������� "������ ����",
* �������� ������� populateModel ��� ���������� ����� ������ ������ ������, ���� ����������� � cookie ������.
*/
function populateAllModels(automaker) {
	
	//...	
	populateModel(models[currentModel]);	
	
}

/**
* ��������� select ������� years � ����� ������� �������, ��������������� ��������� �� window.selectedCriteria, ���� 
* ������ ���������.
*/
function populateModel(model) {
	
}

/**
* ����������� � ������� ������ Automaker ��� ��������� �������� ������������� ��� ���������� ������ ������� ���������� �����������������.
*/
function automakerChanged() {
	var automaker = document.carfilter.automaker;
	var selectedAutomakerName = automaker.options[automaker.selectedIndex].value;
	DwrService.getAutomaker(selectedAutomakerName, getAutomakerCallback);
}

function getAutomakerCallback(automaker) {
}

/**
* ����������� ��� ������ ������ ����������, ����������� �� ����� ������ � ����� ����������������� ������ � �������.
*/
function modelChanged() {
	//...	
	DwrService.getModel(selectedAutomakerName, selectedModelName, getModelCallback);
}

function getModelCallback(model) {
	populateModel(model);
}

/**
* ��������� ������� ��������� �������� � cookie. �ookie �������� 10 ����. 
* ��������� �������� ���������� �������� ����������� � �������, ������� ������������� � ������ ��������� 
* JSON.stringify() � ����������� � cookie.<b>
* ��������� ���������� ���������� �������� ��������� � ���� �������. ������� �������� ����� 3 �������.
*/
function customSubmit() {
	//...	
	/** Create search criteria holder object. */
	var selectedCriteria = {};
	selectedCriteria.selectedAutomaker = automakerCtrl.selectedIndex - 1;
	selectedCriteria.selectedModel = modelCtrl.selectedIndex;
	selectedCriteria.selectedYear = yearsCtrl.selectedIndex;
	selectedCriteria.selectedManual = gearboxCtrl[0].checked;
	selectedCriteria.selectedAutomatic = gearboxCtrl[1].checked;
	//...	

}

/**
* ��������������� ��������� �������� �� cookie.
*/
function restoreCriteria() {
	var readCookie = getCookie("selectedCriteria"); 
	if (readCookie) {
		window.selectedCriteria = JSON.parse(readCookie);
		populateAutomakersSelectElement();
	}
}

/**
* ������� ���������� � ����������� ��������� �������� �� cookie.
*/
function resetSavedCriteria() {	
}