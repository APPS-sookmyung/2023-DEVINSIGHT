function createCard({ name, imageUrl, linkUrl, title }) {
	const card = document.createElement("a");
	card.className = "col";
	card.href = linkUrl;

	const cardInner = document.createElement("div");
	cardInner.className = "card h-100";

	const cardImgwrapper = document.createElement("div");
	cardImgwrapper.className = "card-img-wrapper";

	const cardImg = document.createElement("img");
	cardImg.className = "card-img-top";
	cardImg.src = imageUrl;

	const cardBody = document.createElement("div");
	cardBody.className = "card-body";

	const cardTitle = document.createElement("h5");
	cardTitle.className = "card-title";
	cardTitle.textContent = `[${name}] ${title}`;

	card.appendChild(cardInner);
	cardInner.appendChild(cardImgwrapper);
	cardImgwrapper.appendChild(cardImg);
	cardInner.appendChild(cardBody);
	cardBody.appendChild(cardTitle);

	return card;
}

function main() {
	const dataList = [
		{
			jsonPath: "../database/devVideoList.json",
			sectionClassName: "dev-video-section",
		},
		{
			jsonPath: "../database/devNewsList.json",
			sectionClassName: "dev-news-section",
		},
		{
			jsonPath: "../database/devSeminarList.json",
			sectionClassName: "dev-seminar-section",
		},
	];

	dataList.forEach(({ jsonPath, sectionClassName }) => {
		fetch(jsonPath)
			.then((response) => response.json())
			.then((devArticleList) => {
				const devArticleSectionElement = document.querySelector("." + sectionClassName);

				devArticleList.forEach(({ name, imageUrl, linkUrl, title }) => {
					const devArticleCard = createCard({
						name,
						imageUrl,
						linkUrl,
						title,
					});

					devArticleSectionElement.appendChild(devArticleCard);
				});
			});
	});
}

main();
