import React, { Component } from 'react';
import Newsitem from '../Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class New extends Component {
  static defaultProps={
    country : "in",
    pageSize:8,
    category :"general"
  }

    static propTypes={
      country : PropTypes.string,
      pageSize :PropTypes.number,
      category :PropTypes.string,

    }
  
  articles=[
    {
      "status": "ok",
      "totalResults": 37,
      "articles": [
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": null,
      "title": "Trump Says Biden Should Be Tested For Drugs Before Debate - CNN NewsNight with Abby Phillip - Podcast on CNN Audio - CNN",
      "description": "Joe Biden and Donald Trump are 72 hours away from when they are due on the debate stage in Atlanta with Jake Tapper and Dana bash. This week's CNN's debate may be the moment that defines this entire campaign. Sources are telling CNN what the president has now…",
      "url": "https://www.cnn.com/audio/podcasts/cnn-newsnight-with-abby-phillip/episodes/c7c405a2-fc2a-11ee-9d58-87c9847feff2",
      "urlToImage": "https://www.cnn.com/audio/static/images/podcasts/cnn-newsnight-with-abby-phillip/wide.7c68734b.jpg",
      "publishedAt": "2024-06-25T08:04:18Z",
      "content": "Trump Says Biden Should Be Tested For Drugs Before Debate\r\nCNN NewsNight with Abby Phillip45 mins\r\nJoe Biden and Donald Trump are 72 hours away from when they are due on the debate stage in Atlanta w… [+202 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Barron's"
      },
      "author": "Barron's",
      "title": "Nvidia Stock Is Cracking. How to Side-Step the Damage. - Barron's",
      "description": null,
      "url": "https://www.barrons.com/articles/nvidia-stock-falling-what-to-do-298c9ad7",
      "urlToImage": null,
      "publishedAt": "2024-06-25T06:30:00Z",
      "content": null
      },
      {
      "source": {
      "id": "reuters",
      "name": "Reuters"
      },
      "author": "Harry Robertson, Stella Qiu",
      "title": "Asian shares mostly higher, yen hits record low versus euro - Reuters.com",
      "description": "European stocks fell on Tuesday after a 7% drop in chipmaker Nvidia dragged down U.S. tech companies on Monday, in a sign of nervousness about the artificial intelligence boom.",
      "url": "https://www.reuters.com/markets/global-markets-wrapup-1-2024-06-25/",
      "urlToImage": "https://www.reuters.com/resizer/v2/ICY2S3JZVNPA5IEERL6SFOBRKI.jpg?auth=07140e7d78e03d166a3c6685da6cb41a9a43cd01d7c26e8ec0af88fa09cfa1bf&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-06-25T06:00:13Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Yahoo Entertainment"
      },
      "author": "Jason Owens",
      "title": "Stanley Cup Final: Panthers win Game 7 thriller over Oilers to secure first championship in franchise history - Yahoo Sports",
      "description": "The Panthers are Stanley Cup champions for the first time.",
      "url": "https://sports.yahoo.com/live/stanley-cup-final-panthers-win-game-7-thriller-over-oilers-to-secure-first-championship-in-franchise-history-025534039.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/XfIh6bIJCcSH6WFZoXFP0w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/aea3de00-3297-11ef-bcf7-cd8167f444d0",
      "publishedAt": "2024-06-25T05:28:00Z",
      "content": "For the first time in history, the Florida Panthers are Stanley Cup champions.\r\nFlorida won a 2-1 Game 7 thriller on Monday night over the Edmonton Oilers to secure a 4-3 series victory in the Stanle… [+8092 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
      },
      {
      "source": {
      "id": "techcrunch",
      "name": "TechCrunch"
      },
      "author": "Ivan Mehta",
      "title": "Apple shelved the idea of integrating Meta's AI models over privacy concerns, report says - TechCrunch",
      "description": "Apple held talks with Meta to integrate its models a few months ago, but decided against the idea over privacy concerns.",
      "url": "https://techcrunch.com/2024/06/24/apple-shelved-the-idea-of-integrating-metas-ai-models-over-privacy-concerns-report-says/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/06/wwdc24-siri-02.jpg?resize=1200,675",
      "publishedAt": "2024-06-25T04:08:48Z",
      "content": "Days after the Wall Street Journal reported that Apple and Meta were in talks to integrate the latter’s AI models, Bloomberg’s Mark Gurman said that the iPhone maker was not planning any such move.\r\n… [+1343 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Knoxville News Sentinel"
      },
      "author": "Mike Wilson, Nick Gray",
      "title": "Tennessee vs Texas A&M live score updates in College World Series final Game 3 - Knoxville News Sentinel",
      "description": "It’s Tennessee vs Texas A&M in the 2024 College World Series final Game 3. Follow for score updates from Omaha, Nebraska.",
      "url": "https://www.knoxnews.com/story/sports/college/university-of-tennessee/other-sports/2024/06/24/tennessee-texas-am-score-updates-ncaa-baseball-college-world-series-game-3/74189247007/",
      "urlToImage": "https://www.knoxnews.com/gcdn/authoring/authoring-images/2024/06/25/PKNS/74201778007-knscws-vols-celebration-bp-26.jpg?crop=4850,2729,x0,y252&width=3200&height=1801&format=pjpg&auto=webp",
      "publishedAt": "2024-06-25T03:33:45Z",
      "content": "Tennessee baseball has its national championship.\r\nThe Vols won 6-5 over Texas A&amp;M in Game 3 of the College World Series finals on Monday in Omaha.\r\nZander Sechrist pitched 5.1 innings of one-run… [+10134 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Internet"
      },
      "author": "https://www.facebook.com/thehackernews",
      "title": "Multiple WordPress Plugins Compromised: Hackers Create Rogue Admin Accounts - The Hacker News",
      "description": "WordPress plugins compromised to create rogue admin accounts. Users advised to check for suspicious activity and remove malicious code. Security alert",
      "url": "https://thehackernews.com/2024/06/multiple-wordpress-plugins-compromised.html",
      "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRP63qpR4yIAwEfP6coCSE8G8dXz5hjoHx9epqVpX6-HNILrqlhD8777IYx2D9DEe8dADddCCr2ZRAJjlif-DPe_f57OlB_R-3GFdztBj3EQZwnZF52oVeU6maraZkQFtBKQeQ65qgekdgdv7lSnm7zePDbwNWJSdUXak7c5PF3iaCgaV6fbx0M8itu1BN/s728-rw-e365/wordpress.png",
      "publishedAt": "2024-06-25T03:32:00Z",
      "content": "Multiple WordPress plugins have been backdoored to inject malicious code that makes it possible to create rogue administrator accounts with the aim of performing arbitrary actions.\r\n\"The injected mal… [+1096 chars]"
      },
      {
      "source": {
      "id": "cnn",
      "name": "CNN"
      },
      "author": "Christian Edwards, Tara John",
      "title": "Netanyahu scrambles to contain backlash to comments on ceasefire deal as hostage families release new video - CNN",
      "description": "Israel’s Prime Minister Benjamin Netanyahu on Monday said he was still “committed” to an Israeli ceasefire and hostage release proposal backed by the United States as he faced blowback from families of Israeli hostages for appearing to walk back his support o…",
      "url": "https://www.cnn.com/2024/06/24/middleeast/israel-hostage-forum-video-netanyahu-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/20240624-vhghghg.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-06-25T03:11:00Z",
      "content": "Israels Prime Minister Benjamin Netanyahu on Monday said he was still committed to an Israeli ceasefire and hostage release proposal backed by the United States as he faced blowback from families of … [+6021 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "ScienceAlert"
      },
      "author": "ScienceAlert Staff",
      "title": "Astronauts Stranded With No Set Return Date For New Boeing Starliner - ScienceAlert",
      "description": "After helium leaks and thruster problems with Boeing's Starliner capsule, NASA has been pushing back the return date from the International Space Station.",
      "url": "https://www.sciencealert.com/astronauts-stranded-with-no-set-return-date-for-new-boeing-starliner",
      "urlToImage": "https://www.sciencealert.com/images/2024/06/starliner_in_orbit.jpg",
      "publishedAt": "2024-06-25T02:04:20Z",
      "content": "After helium leaks and thruster problems with Boeing's Starliner capsule, NASA has been pushing back the return date from the International Space Station.\r\nOn Friday, the agency announced they no lon… [+3758 chars]"
      },
      {
      "source": {
      "id": "google-news",
      "name": "Google News"
      },
      "author": "The Washington Post",
      "title": "Tamayo Perry, actor and legendary surfer, killed in shark attack - The Washington Post",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9zcG9ydHMvMjAyNC8wNi8yNC90YW1heW8tcGVycnktZGllcy1zaGFyay1hdHRhY2stYWN0b3Itc3VyZmVyL9IBAA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-25T01:59:05Z",
      "content": null
      },
      {
      "source": {
      "id": "al-jazeera-english",
      "name": "Al Jazeera English"
      },
      "author": "Al Jazeera",
      "title": "‘Julian Assange is free’: Wikileaks founder freed in deal with US - Al Jazeera English",
      "description": "Assange to plead guilty to one charge of espionage and return home to Australia after decades fighting US extradition.",
      "url": "https://www.aljazeera.com/news/2024/6/25/julian-assange-is-free-wikileaks-founder-freed-in-deal-with-us",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/2024-06-25T011055Z_2030862652_RC21I8A0ZP5N_RTRMADP_3_USA-ASSANGE-1719288479.jpg?resize=1920%2C1440",
      "publishedAt": "2024-06-25T01:29:38Z",
      "content": "WikiLeaks founder Julian Assange has been freed from prison in the United Kingdom and is set to travel home to Australia after he pleads guilty to a single charge of breaching the espionage law in th… [+7498 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hollywood Reporter"
      },
      "author": "Tiffany Taylor",
      "title": "Kevin Costner Says He Finally Confirmed His ‘Yellowstone’ Exit Because “I Don’t Need Drama” - Hollywood Reporter",
      "description": "The actor also opened up about his appreciation for the hit show's fans while promoting his new film 'Horizon: An American Saga.'",
      "url": "http://www.hollywoodreporter.com/tv/tv-news/kevin-costner-why-he-confirmed-yellowstone-exit-1235931486/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/05/KevinCostnerGettyImages-2153692603.jpg?w=1024",
      "publishedAt": "2024-06-25T01:04:23Z",
      "content": "Kevin Costner is revealing why now was the right time to confirm his Yellowstone departure. \r\nWhile promoting the forthcoming first movie in his Western film series Horizon: An American Saga, the act… [+2745 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Space.com"
      },
      "author": "Meredith Garofalo",
      "title": "Powerful GOES-U weather satellite cleared for June 25 launch on SpaceX Falcon Heavy rocket - Space.com",
      "description": "NOAA's next-gen weather satellite is set to lift off this afternoon (June 25), weather permitting.",
      "url": "https://www.space.com/goes-u-spacex-falcon-heavy-go-for-launch",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/ken6iXzHEQQTGAYsUde6ZD-1200-80.jpg",
      "publishedAt": "2024-06-25T01:01:55Z",
      "content": "CAPE CANAVERAL, Florida — The green lights continue to shine leading up to the launch of a powerful U.S. weather satellite. \r\nGOES-U\r\n, the fourth and final member of the U.S. National Oceanic and At… [+4493 chars]"
      },
      {
      "source": {
      "id": "fox-news",
      "name": "Fox News"
      },
      "author": "Bradford Betz",
      "title": "Oakland mayor breaks silence after FBI raid: ‘I have done nothing wrong’ - Fox News",
      "description": "Oakland’s embattled mayor Sheng Thao gave her first public remarks Monday after FBI agents raided her home last week, saying she was innocent. She said she has \"done nothing wrong.\"",
      "url": "https://www.foxnews.com/politics/oakland-mayor-breaks-silence-after-fbi-raid-i-have-done-nothing-wrong",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/06/Oakland-Mayor.png",
      "publishedAt": "2024-06-25T00:41:00Z",
      "content": "Oaklands embattled mayor Sheng Thao gave her first public remarks Monday after federal agents raided her home. \r\n\"I want to be crystal clear. I have done nothing wrong,\" Thao said, reading prepared r… [+2706 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "GMA"
      },
      "author": "Mason Leib",
      "title": "Taylor Swift says she is 'swooning' over Travis Kelce's tour debut: See photos - Good Morning America",
      "description": "See the best moment's from Taylor Swift's three-night run at London's Wembley Stadium.",
      "url": "https://goodmorningamerica.com/culture/story/taylor-swift-takes-wembley-3-nights-best-photos-111370001",
      "urlToImage": "https://s.abcnews.com/images/GMA/taylor-swift1-gty-ml-240624_1719238560063_hpMain_16x9_992.jpg",
      "publishedAt": "2024-06-25T00:33:45Z",
      "content": "Taylor Swift reflected on her headline-making London shows at Wembley Stadium, sharing she is \"still cracking up\" and \"swooning over\" boyfriend Travis Kelce's Eras Tour debut in an Instagram post on … [+785 chars]"
      },
      {
      "source": {
      "id": "politico",
      "name": "Politico"
      },
      "author": "POLITICO",
      "title": "As Menendez changed approach to Egypt, staff found actions 'unusual' and 'weird' - POLITICO",
      "description": null,
      "url": "https://www.politico.com/news/2024/06/24/menendez-trial-egyptian-officials-00164776",
      "urlToImage": null,
      "publishedAt": "2024-06-25T00:18:27Z",
      "content": null
      },
      {
      "source": {
      "id": null,
      "name": "Motley Fool"
      },
      "author": "Johnny Rice",
      "title": "Chipotle's 50-for-1 Stock Split Is Coming. Here's What Investors Need to Know - The Motley Fool",
      "description": "A historic stock split is coming for this fast-casual favorite.",
      "url": "https://www.fool.com/investing/2024/06/24/chipotles-50-for-1-stock-split-is-coming-heres-wha/",
      "urlToImage": "https://g.foolcdn.com/editorial/images/781232/gettyimages-1369045598.jpg",
      "publishedAt": "2024-06-25T00:17:00Z",
      "content": "A historic stock split is coming for this fast-casual favorite.High-profile stock splits are en vogue, it seems. Just days after Nvidia split its shares 10-for-1, Broadcom announced it would follow s… [+3637 chars]"
      },
      {
      "source": {
      "id": "the-verge",
      "name": "The Verge"
      },
      "author": "Jay Peters",
      "title": "Gmail's Gemini AI sidebar and email summaries are rolling out now - The Verge",
      "description": "Gmail and Google’s other Workspace apps are getting more AI features, including a Gemini sidebar.",
      "url": "https://www.theverge.com/2024/6/24/24185277/google-gmail-gemini-ai-sidebar",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/5KDrAFDF0p1fErypFb2lKrwinaM=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/23954508/acastro_STK459_10.jpg",
      "publishedAt": "2024-06-24T23:59:20Z",
      "content": "Gmails Gemini AI sidebar and email summaries are rolling out now\r\nGmails Gemini AI sidebar and email summaries are rolling out now\r\n / Google is adding Gemini AI features for paying customers to Docs… [+1473 chars]"
      },
      {
      "source": {
      "id": "bleacher-report",
      "name": "Bleacher Report"
      },
      "author": "Scott Polacek",
      "title": "NBA Insider: Paul George Interests Warriors Amid Clippers, Knicks Trade Rumors - Bleacher Report",
      "description": "The Golden State Warriors are surely looking to make a splash this offseason after losing in the play-in tournament, and that splash may come in the form of…",
      "url": "https://bleacherreport.com/articles/10125923-nba-insider-paul-george-interests-warriors-amid-clippers-knicks-trade-rumors",
      "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1719270733/mrrds4eqmkxffjsluzsa.jpg",
      "publishedAt": "2024-06-24T23:29:16Z",
      "content": "Brian Rothmuller/Icon Sportswire via Getty Images\r\nThe Golden State Warriors are surely looking to make a splash this offseason after losing in the play-in tournament, and that splash may come in the… [+2079 chars]"
      }
      ]
      }
    ]
  
      
  
  constructor(props){
    super(props);
    console.log("hello");
    this.state={
      articles: [],
      loading :true,
      page :1,
      totalResults:0

    }
    document.title=`${this.props.category} - BUZZBRIEF`
  }
  async updateNews(){
    this.props.setProgress(10);
    let url =`https://newsapi.org/v2/top-headlines?country${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page-1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles: parsedData.articles, 
      totalResults:parsedData.totalResults,

    loading:false})
    this.props.setProgress(100);
  }
  async componentDidMount(){
    this.updateNews()
  }
  fetchMoreData=async()=>{
    this.setState({page:this.state.page+1});
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page-1&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: this.state.articles.concat(parsedData.articles), 
      totalResults:parsedData.totalResults})
  }

  render() {
    return (
      < div className='container' my-3>
        <h1 className='text-center' style={{ margin: '50px 0px', marginTop:'90px' }}>BUZZBRIEF - Top Headlines on {this.props.category}  </h1>

        {this.state.loading &&<Spinner/>}
        <InfiniteScroll
  dataLength={this.state.articles.length} //This is important field to render the next data
  next={this.fetchMoreData}
  hasMore={this.state.articles.length !== this.state.totalResults}
  loader={<Spinner/>}>
        
        <div className='container'>
        <div className="row">
        
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key ={element.url}>
          <Newsitem title ={element.title?element.title: " "} description={element.description?element.description: " "} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>
        })}  
          
            
          </div>
        </div>
        </InfiniteScroll>
        
       
        
        
        
      </div>
    );
  }
}

