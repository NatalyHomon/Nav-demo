const root = document.documentElement; //створюємо змінну і прив'язуємо її до html
const items = Array.from(document.querySelectorAll("li")); //створюємо змінну у вигляді масиву і прив'язуємо її до li, у нас масив з li елементів(вони є об'єктами?)
root.style.setProperty("--active", 0);//добавляємо всім елементам html новий css атрибут у вигляді variable чи тільки li елементам?

items.forEach((item, index) => {//перебираємо li елементи
	if (index === 0) item.setAttribute("data-active", true); //	якщо це перший елемент. ЧОМУ 
	item.style.setProperty("--i", index);

	item.addEventListener("click", (e) => {
		root.style.setProperty("--active", index);
		root
			.querySelectorAll("[data-active]")
			.forEach((el) => el.removeAttribute("data-active"));
		item.setAttribute("data-active", true);
	});
});
