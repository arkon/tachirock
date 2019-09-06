# tachirock

> Manga Rock backup to Tachiyomi backup converter

Converts something like this from Manga Rock:

```
{
    "recents": [],
    "favorites": [
        {
            "author": "",
            "mid": 372759,
            "msid": 42,
            "manga": "Tô Tịch Kỳ Quái"
        },
        {
            "author": "",
            "mid": 305579,
            "msid": 42,
            "manga": "Hero Waltz"
        },
        {
            "author": "",
            "mid": 306150,
            "msid": 42,
            "manga": "Ashita no Yoichi"
        },
        {
            "author": "BANJO Azusa",
            "mid": 488011,
            "msid": 42,
            "manga": "Hensokukei Quadrangle"
        }
    ]
}
```

Into something like this for Tachiyomi:

```
{
  "version": 2,
  "mangas": [
    {
      "manga": [
        "/manga/mrs-serie-372759",
        "Tô Tịch Kỳ Quái",
        1554176584893433600,
        0,
        0
      ],
      "chapters": [],
      "track": [],
      "history": []
    },
    {
      "manga": [
        "/manga/mrs-serie-305579",
        "Hero Waltz",
        1554176584893433600,
        0,
        0
      ],
      "chapters": [],
      "track": [],
      "history": []
    },
    {
      "manga": [
        "/manga/mrs-serie-306150",
        "Ashita no Yoichi",
        1554176584893433600,
        0,
        0
      ],
      "chapters": [],
      "track": [],
      "history": []
    },
    {
      "manga": [
        "/manga/mrs-serie-488011",
        "Hensokukei Quadrangle",
        1554176584893433600,
        0,
        0
      ],
      "chapters": [],
      "track": [],
      "history": []
    }
  ],
  "categories": []
}
```