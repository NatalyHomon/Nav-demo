const root = document.documentElement; //створюємо змінну і прив'язуємо її до html
const items = Array.from(document.querySelectorAll("li")); //створюємо змінну у вигляді масиву і прив'язуємо її до li, у нас масив з li елементів(вони є об'єктами?)
root.style.setProperty("--active", 0);//добавляємо всім елементам html новий css атрибут у вигляді variable "--active" --active" ВИКОРИСТ. В CSS ДЛЯ ОБРАХУНКУ ПЕРЕМІЩЕННЯ div class="bar"

items.forEach((item, index) => {//перебираємо li елементи
	if (index === 0) item.setAttribute("data-active", true); //	якщо це перший елемент згідно індекса добавляємо йому атрибут зі значенням. Це стартове положення div class="bar"
	item.style.setProperty("--i", index);//створюємо змінну зі значенням для обрахунку переміщення елементу

	item.addEventListener("click", (e) => {
		root.style.setProperty("--active", index);//змінюємо значення відповідно до натиснутого елемента, її отримають всі елементи
		root//в цій частині видаляємо в пасивних елементах атрибут data-active
			.querySelectorAll("[data-active]")
			.forEach((el) => el.removeAttribute("data-active"));
		item.setAttribute("data-active", true);//надаємо клікнутому елементу атрибут 
	});
});
