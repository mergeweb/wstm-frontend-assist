function ebscoPreProcessBook(myForm) {
	myForm.bquery.value = myForm.uquery.value + " AND PT Book";
}