export async function fetchImages(categ) {
    const response = await fetch(
      "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&categoryId="+categ+"&applicationId=1021918054027582324"
      );
    const data = await response.json();
    //function text(data.result[0]);
    return data.result;
  }