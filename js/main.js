function createCard({ name, imageUrl, linkUrl, title, description }) {
	const card = document.createElement("a");
	card.className = "col";
	card.href = linkUrl;

	const cardInner = document.createElement("div");
	cardInner.className = "card h-100";

	const cardImg = document.createElement("img");
	cardImg.className = "card-img-top";
	cardImg.src = imageUrl;

	const cardBody = document.createElement("div");
	cardBody.className = "card-body";

	const cardTitle = document.createElement("h5");
	cardTitle.className = "card-title";
	cardTitle.textContent = `[${name}] ${title}`;

	const cardText = document.createElement("p");
	cardText.className = "card-text";
	cardText.textContent = description;

	card.appendChild(cardInner);
	cardInner.appendChild(cardImg);
	cardInner.appendChild(cardBody);
	cardBody.appendChild(cardTitle);
	cardBody.appendChild(cardText);

	return card;
}

function main() {
	fetch("../database/devVideoList.json")
		.then((response) => response.json())
		.then((devNewsList) => {
			console.log(devNewsList);

			const devNewsSectionElement = document.querySelector(".dev-news-section");

			devNewsList.forEach(({ name, imageUrl, linkUrl, title, description }) => {
				const devNewsCard = createCard({
					name,
					imageUrl,
					linkUrl,
					title,
					description,
				});

				devNewsSectionElement.appendChild(devNewsCard);
			});
		});
}

main();
