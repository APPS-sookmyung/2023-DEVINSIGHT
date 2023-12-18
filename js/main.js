function createCard({ name, imageUrl, linkUrl, title, date }) {
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

	const cardDate = document.createElement("p");
	cardDate.className = "card-date";
	cardDate.textContent = date;

	card.appendChild(cardInner);
	cardInner.appendChild(cardImgwrapper);
	cardImgwrapper.appendChild(cardImg);
	cardInner.appendChild(cardBody);
	cardBody.appendChild(cardTitle);
	cardBody.appendChild(cardDate);

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
		{
			jsonPath: "../database/devEventList.json",
			sectionClassName: "dev-event-section",
		},
	];

	dataList.forEach(({ jsonPath, sectionClassName }) => {
		fetch(jsonPath)
			.then((response) => response.json())
			.then((devArticleList) => {
				const devArticleSectionElement = document.querySelector("." + sectionClassName);

				devArticleList.slice(0, 3).forEach(({ name, imageUrl, linkUrl, title, date }) => {
					const devArticleCard = createCard({
						name,
						imageUrl,
						linkUrl,
						title,
						date,
					});

					devArticleSectionElement.appendChild(devArticleCard);
				});
			});
	});

	// dev-video.html
	fetch("../database/devVideoList.json")
		.then((response) => response.json())
		.then((devArticleList) => {
			const devArticleAllSectionElement = document.querySelector(".all-video-section__card-list");

			devArticleList.forEach(({ name, imageUrl, linkUrl, title, date }) => {
				const devArticleCard = createCard({
					name,
					imageUrl,
					linkUrl,
					title,
					date,
				});

				devArticleAllSectionElement.appendChild(devArticleCard);
			});
		});

	// dev-news.html
	fetch("../database/devNewsList.json")
		.then((response) => response.json())
		.then((devArticleList) => {
			const devArticleAllSectionElement = document.querySelector(".all-news-section__card-list");

			devArticleList.forEach(({ name, imageUrl, linkUrl, title, date }) => {
				const devArticleCard = createCard({
					name,
					imageUrl,
					linkUrl,
					title,
					date,
				});

				devArticleAllSectionElement.appendChild(devArticleCard);
			});
		});

	// dev-seminar.html
	fetch("../database/devSeminarList.json")
		.then((response) => response.json())
		.then((devArticleList) => {
			const devArticleAllSectionElement = document.querySelector(".all-seminar-section__card-list");

			devArticleList.forEach(({ name, imageUrl, linkUrl, title, date }) => {
				const devArticleCard = createCard({
					name,
					imageUrl,
					linkUrl,
					title,
					date,
				});

				devArticleAllSectionElement.appendChild(devArticleCard);
			});
		});

	// dev-event.html
	fetch("../database/devEventList.json")
		.then((response) => response.json())
		.then((devArticleList) => {
			const devArticleAllSectionElement = document.querySelector(".all-event-section__card-list");

			devArticleList.forEach(({ name, imageUrl, linkUrl, title, date }) => {
				const devArticleCard = createCard({
					name,
					imageUrl,
					linkUrl,
					title,
					date,
				});

				devArticleAllSectionElement.appendChild(devArticleCard);
			});
		});
}

main();
