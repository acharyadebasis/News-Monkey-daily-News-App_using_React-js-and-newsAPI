import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class NewsCompnents extends Component {
//   articles = [
//     { comp_Name: "ICS", empName: "Debasis", id: 1232 },
//     { comp_Name: "ICS", empName: "Debu", id: 12 }
    
//   ];

   articles= [
      {
        "source": { "id": "the-washington-post", "name": "The Washington Post" },
        "author": "Yasmeen Abutaleb, Cleve R. Wootson Jr., Marianna Sotomayor",
        "title": "Frustration, anger rising among Democrats over caution on abortion - The Washington Post",
        "description": "A growing number of Democrats are voicing frustration at what they see as the passivity of Biden and other party leaders.",
        "url": "https://www.washingtonpost.com/politics/2022/06/27/democrats-angry-party-leaders/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/57ATEOXT4EI6ZLAWR67XDFGNPA.jpg&w=1440",
        "publishedAt": "2022-06-28T04:10:00Z",
        "content": "Placeholder while article actions load\r\nJust hours after the Supreme Court decision ending 50 years of abortion rights, President Biden outlined his ideal response: Elect more Democrats. This fall, R… [+9800 chars]"
      },
      {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "Rob Picheta, CNN",
        "title": "Russian airstrike hits busy shopping mall in central Ukraine, sparking fears of mass casualties - CNN",
        "description": "A Russian airstrike struck a bustling shopping mall in Kremenchuk, central Ukraine on Monday, setting the building ablaze and prompting concerns of mass casualties.",
        "url": "https://www.cnn.com/2022/06/27/europe/kremenchuk-shopping-mall-airstrike-ukraine-intl/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220627111413-kremenchuk-shopping-mall-fire-0627-super-tease.jpg",
        "publishedAt": "2022-06-28T03:08:00Z",
        "content": "(CNN)A Russian airstrike struck a bustling shopping mall in Kremenchuk, central Ukraine on Monday, setting the building ablaze and prompting concerns of mass casualties.\r\nUkrainian President Volodymy… [+4822 chars]"
      },
      {
        "source": { "id": null, "name": "ESPN" },
        "author": "Kevin Pelton",
        "title": "Kyrie Irving to opt in - What it means for the Brooklyn Nets and the future of their star point guard - ESPN",
        "description": "Despite Kyrie Irving deciding to opt in with the Nets, there are still plenty of ways this relationship could play out.",
        "url": "https://www.espn.com/nba/insider/insider/story/_/id/34158502/kyrie-irving-opt-means-brooklyn-nets-future-their-star-point-guard",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0310%2Fr984466_1296x729_16%2D9.jpg",
        "publishedAt": "2022-06-28T02:43:40Z",
        "content": "What's next for the Brooklyn Nets now that Kyrie Irving has decided to exercise his player option to return for the 2022-23 season instead of potentially leaving Brooklyn via free agency this summer?… [+7045 chars]"
      }
    ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  async componentDidMount() {
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=6dc6801e157b4d18ba98dd17d4732f0d";
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({ articles: parseddata.articles });
  }
  render() {
    return (
      <div>
        <h1>Today news Top-headlines by Don-News-Monkey</h1>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <div className="container-my-3">
                  <NewsItem
                    title={element.title}
                    des={element.description}
                    imageUrl={element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg"}
                    newsUrl={element.url}
                    className="card-img-top"
                    alt="/"
                  />
                </div>
              </div>
            );


            // return(
            //     <div className="col-md-4" key={element.id}>
            //      <div className="container-my-3">
            //      <NewsItem companyName={element.comp_Name} id={element.id} Ename={element.empName}/>
            //      </div>
            //      </div>

            // );
          })}
        </div>
      </div>
    );
  }
}

export default NewsCompnents;
