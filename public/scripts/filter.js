let posts = [
    {
        title: "post 1",
        content: "Olä, esse eh meu primeiro post",
        date: "2021-09-30",
        tags: ["articles", "career"]
    },
]


const tag = "articles"
posts = posts.filter(({tags}) => tags.includes(tag))