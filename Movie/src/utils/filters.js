const generateYearsOption = () => {
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let i = 0; i < 14; i++) {
        years.push({ name: currentYear - i, value: currentYear - i });
    }

    return years;
}

const yearsOption = generateYearsOption();

export const FILTERS = [
    {
        title: 'Страны',
        options: [
            {
                name: "Австралия",
                value: "%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D1%8F"
            },
            {
                name: "Великобритания",
                value: "%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F"
            },
            {
                name: "Германия",
                value: "%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F"
            },
            {
                name: "Индия",
                value: "%21%D0%98%D0%BD%D0%B4%D0%B8%D1%8F"
            },
            {
                name: "Испания",
                value: "%D0%98%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F"
            },
            {
                name: "Италия",
                value: "%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F"
            },
            {
                name: "Канада",
                value: "%D0%9A%D0%B0%D0%BD%D0%B0%D0%B4%D0%B0"
            },
            {
                name: "Китай",
                value: "%D0%9A%D0%B8%D1%82%D0%B0%D0%B9"
            },
            {
                name: "Корея Южная",
                value: "%D0%9A%D0%BE%D1%80%D0%B5%D1%8F %D0%AE%D0%B6%D0%BD%D0%B0%D1%8F"
            },
            {
                name: "Мексика",
                value: "%D0%9C%D0%B5%D0%BA%D1%81%D0%B8%D0%BA%D0%B0"
            },
            {
                name: "Норвегия",
                value: "%D0%9D%D0%BE%D1%80%D0%B2%D0%B5%D0%B3%D0%B8%D1%8F"
            },
            {
                name: "Россия",
                value: "%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F"
            },
            {
                name: "СССР",
                value: "%D0%A1%D0%A1%D0%A1%D0%A0"
            },
            {
                name: "США",
                value: "%D0%A1%D0%A8%D0%90"
            },
            {
                name: "Франция",
                value: "%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F"
            },
            {
                name: "Япония",
                value: "%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F"
            }
        ]
    },
    {
        title: 'Жанры',
        options: [
            {
                name: "аниме",
                value: "аниме"
            },
            {
                name: "биография",
                value: "биография"
            },
            {
                name: "боевик",
                value: "боевик"
            },
            {
                name: "вестерн",
                value: "вестерн"
            },
            {
                name: "военный",
                value: "военный"
            },
            {
                name: "детектив",
                value: "детектив"
            },
            {
                name: "детский",
                value: "детский"
            },
            {
                name: "для взрослых",
                value: "для взрослых"
            },
            {
                name: "документальный",
                value: "документальный"
            },
            {
                name: "драма",
                value: "драма"
            },
            {
                name: "игра",
                value: "игра"
            },
            {
                name: "история",
                value: "история"
            },
            {
                name: "комедия",
                value: "комедия"
            },
            {
                name: "концерт",
                value: "концерт"
            },
            {
                name: "короткометражка",
                value: "короткометражка"
            },
            {
                name: "криминал",
                value: "криминал"
            },
            {
                name: "мелодрама",
                value: "мелодрама"
            },
            {
                name: "музыка",
                value: "музыка"
            },
            {
                name: "мультфильм",
                value: "мультфильм"
            },
            {
                name: "мюзикл",
                value: "мюзикл"
            },
            {
                name: "новости",
                value: "новости"
            },
            {
                name: "приключения",
                value: "приключения"
            },
            {
                name: "реальное ТВ",
                value: "реальное ТВ"
            },
            {
                name: "семейный",
                value: "семейный"
            },
            {
                name: "спорт",
                value: "спорт"
            },
            {
                name: "ток-шоу",
                value: "ток-шоу"
            },
            {
                name: "триллер",
                value: "триллер"
            },
            {
                name: "ужасы",
                value: "ужасы"
            },
            {
                name: "фантастика",
                value: "фантастика"
            },
            {
                name: "фильм-нуар",
                value: "фильм-нуар"
            },
            {
                name: "фэнтези",
                value: "фэнтези"
            },
            {
                name: "церемония",
                value: "церемония"
            }
        ]
    },
    {
        title: 'Год',
        options: yearsOption
    },
    {
        title: 'Компании',
        options: [
            {
                name: "Amazon Prime Video",
                value: "Amazon Prime Video"
            },
            {
                name: 'Apple TV+',
                value: 'Apple TV+'
            },
            {
                name: 'BritBox',
                value: 'BritBox'
            },
            {
                name: 'Crunchyroll',
                value: 'Crunchyroll'
            },
            {
                name: 'DC Universe',
                value: 'DC Universe'
            },
            {
                name: 'Disney+',
                value: 'Disney+'
            },
            {
                name: 'FX',
                value: 'FX'
            },
            {
                name: 'HBO',
                value: 'HBO'
            },
            {
                name: 'Hulu',
                value: 'Hulu'
            },
            {
                name: 'KION',
                value: 'KION'
            },
            {
                name: 'Max',
                value: 'Max'
            },
            {
                name: 'Netflix',
                value: 'Netflix'
            },
            {
                name: 'Okko',
                value: 'Okko'
            },
            {
                name: 'Paramount+',
                value: 'Paramount+'
            },
            {
                name: 'Premier',
                value: 'Premier'
            },
            {
                name: 'Peacock',
                value: 'Peacock'
            },
            {
                name: 'START',
                value: 'START'
            },
            {
                name: 'Showtime',
                value: 'Showtime'
            },
            {
                name: 'Shudder',
                value: 'Shudder'
            },
            {
                name: 'The CW',
                value: 'The CW'
            },
            {
                name: 'Starz',
                value: 'Starz'
            },
            {
                name: 'YouTube Premium',
                value: 'YouTube Premium'
            },
            {
                name: 'Wink',
                value: 'Wink'
            },
            {
                name: 'more.tv',
                value: 'more.tv'
            },
            {
                name: 'Иви',
                value: 'Иви'
            },
            {
                name: 'Кинопоиск',
                value: 'Кинопоиск'
            },
            {
                name: 'Смотрим',
                value: 'Смотрим'
            }
        ]
    },
    {
        title: 'Рейтинг',
        options: [
            {
                name: "от 9",
                value: "9"
            },
            {
                name: "от 8",
                value: "8"
            },
            {
                name: "от 7",
                value: "7"
            },
            {
                name: "от 6",
                value: "6"
            },
            {
                name: "от 5",
                value: "5"
            },
        ]
    },
]


export const TUPEMOVIE = {
    title: 'Тип',
    options: [
        {
            name: 'кино',
            value: 1
        },
        {
            name: 'мультфильм',
            value: 3
        },
        {
            name: 'аниме',
            value: 4
        },
    ]
}


export const TUPESERIES = {
    title: 'Тип',
    options: [
        {
            name: 'сериал',
            value: 2
        },
        {
            name: 'аниме',
            value: 4
        },
        {
            name: 'мультсериал',
            value: 5
        }
    ]
}
