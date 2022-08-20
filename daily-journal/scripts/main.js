import { getJournalEntries } from "./entries.js";

const createElement = (elementName, cssId, cssClass, content) => {
  let htmlElement = document.createElement(`${elementName}`);
  if (cssId.trim()) htmlElement.id = cssId.trim();
  if (cssClass.trim()) htmlElement.className = cssClass.trim();
  if (content.trim()) htmlElement.textContent = content.trim();

  return htmlElement;
};

const previousEntriesParent = document.getElementById(`entries`);

const previousEntriesParentContainer = createElement(
  `div`,
  ``,
  `previous-entries-parent-container`,
  ``
);
previousEntriesParent.appendChild(previousEntriesParentContainer);

const previousEntriesTitle = createElement(
  `div`,
  ``,
  `previous-entries-title`,
  ``
);
previousEntriesParentContainer.appendChild(previousEntriesTitle);

const previousEntriesTitleH2 = createElement(`h2`, ``, ``, `Previous Entries`);
previousEntriesTitle.appendChild(previousEntriesTitleH2);

const previousEntriesCardsContainer = createElement(
  `div`,
  ``,
  `previous-entries-cards-container`,
  ``
);
previousEntriesParentContainer.appendChild(previousEntriesCardsContainer);

const previousEntriesCardItemsContainer = createElement(
  `div`,
  ``,
  `previous-entries-card-items-container`,
  ``
);
previousEntriesCardsContainer.appendChild(previousEntriesCardItemsContainer);

const journalEntries = getJournalEntries();

for (let i = 0; i < journalEntries.length; i++) {
  const previousEntriesCardItem = createElement(
    `div`,
    ``,
    `previous-entries-card-item${i + 1}`,
    ``
  );
  previousEntriesCardItemsContainer.appendChild(previousEntriesCardItem);

  const previousEntriesCardComponentContainer = createElement(
    `div`,
    ``,
    `previous-entries-card-component-container`,
    ``
  );
  previousEntriesCardItem.appendChild(previousEntriesCardComponentContainer);

  const previousEntriesCardComponentTitle = createElement(
    `div`,
    ``,
    `previous-entries-card-component-title`,
    `${journalEntries[i].concept}`
  );
  previousEntriesCardComponentContainer.appendChild(
    previousEntriesCardComponentTitle
  );

  const previousEntriesCardComponentDate = createElement(
    `div`,
    ``,
    `previous-entries-card-component-date`,
    `${journalEntries[i].date}`
  );
  previousEntriesCardComponentContainer.appendChild(
    previousEntriesCardComponentDate
  );

  const previousEntriesCardComponentMood = createElement(
    `div`,
    ``,
    `previous-entries-card-component-mood`,
    `${journalEntries[i].mood}`
  );
  previousEntriesCardComponentContainer.appendChild(
    previousEntriesCardComponentMood
  );

  const previousEntriesCardComponentContentDetails = createElement(
    `div`,
    ``,
    `previous-entries-card-component-content-details`,
    `${journalEntries[i].entry}`
  );
  previousEntriesCardComponentContainer.appendChild(
    previousEntriesCardComponentContentDetails
  );
}

const previousEntriesSidebar = createElement(
  `div`,
  ``,
  `previous-entries-sidebar`,
  ``
);
previousEntriesParentContainer.appendChild(previousEntriesSidebar);
