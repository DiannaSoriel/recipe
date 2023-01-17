import { useEffect, useState } from "react";
import { fetchImages } from "./api";
function Header() {
    return (
      <header className="hero is-link is-bold has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">節約・簡単料理 ランキング</h1>
          </div>
        </div>
      </header>
    );
  }
  
  function Image(props) {
    const food=props.src;
    return (
      <div>
      <div class="flex">
          <figure class="image"><img src={food.foodImageUrl} alt="Food"/>
          </figure>
        <div class="right">
          <p class="rank">{food.rank}位</p><p class="title"> {food.recipeTitle}</p>
          <p class="text">{food.recipeDescription}</p>
          <p class="text">調理時間の目安:{food.recipeIndication}</p>
          <p class="text">費用の目安:{food.recipeCost}</p>
          <p class="button is-link is-light"><a href={food.recipeUrl}>詳しいレシピ</a></p>

        </div>
        </div>
      </div>
    )
  }
  function Loading() {
    return <p>Now Loading</p>;
  }
  function Text(props){
    const text=props.comment;
    return (
    <div classNamae="content has-text-centered">
      <h1>{text.recipeTitle}</h1>
      <p>{text.recipeDescription}</p>
    </div>
    );
  }
  function Gallery(props) {
    const url= props.url;
    if (url== null) {
        return <Loading/>;
      }
    return (
      <div className="columns is-vcentered is-multiline">
      <div className="column is-3">
        <table>
        <Image src={url[0]} />
        <Image src={url[1]} />
        <Image src={url[2]} />
        <Image src={url[3]} />
        </table>
      </div>
      </div>
    );
  }
  function Form(props) {
    function handleSubmit(event) {
      event.preventDefault();
      const { category } = event.target.elements;
      props.onFormSubmit(category.value);
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                <select name="category" defaultValue="10">
                  <option value="36-493">鶏肉料理</option>
                  <option value="36-494">豚肉料理</option>
                  <option value="36-495">魚料理</option>
                  <option value="36-491">おつまみ</option>
                  <option value="36-489">お菓子</option>
                  <option value="36-708">無限レシピ</option>
                  <option value="37-498">100円以下の節約料理</option>
                  <option value="37-499">300円前後の節約料理</option>
                </select>
              </div>
            </div>
            <div className="control">
              <button type="submit" className="button is-dark">
                search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  function Main() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
        fetchImages("36-493").then((urls) => {
        setUrls(urls);
        });
      }, []);
      function reloadImages(category) {
        fetchImages(category).then((urls) => {
          setUrls(urls);
        });
      }
        return (
      <main>
           <section className="section">
        <div className="container">
          <Form onFormSubmit={reloadImages}/>
        </div>
      </section>
        <section className="section">
          <div className="container">
            <Gallery url={urls} />
          </div>
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer has-background-grey-darker has-text-white">
        <div className="content has-text-centered">
          <p>5421028 Yu Asano</p>
          <p>日本大学文理学部情報科学科 Webプログラミング 課題制作</p>
          <p>Cooking data comes from Recipe Category Ranking  API</p>
          <p>
          <a href="https://webservice.rakuten.co.jp/" target="_blank"><img src="https://webservice.rakuten.co.jp/img/credit/200709/credit_31130.gif" border="0" alt="Rakuten Web Service Center" title="Rakuten Web Service Center" width="311" height="30"/></a>
          </p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  
  export default App;