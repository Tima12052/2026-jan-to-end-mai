import "./sitem.css"
export default function SItems({
  title,
  summary,
  newsSite,
  imageUrl,
  url,
  pubAt,
  updAt,
  feautered
}) {
    let styles;
    let feauteredA;
    if (feautered = true) {
        styles = "feauteredT"
        feauteredA = "this title was feautered"
    }else{
        styles = "feauteredF"
        feauteredA = "this title wasn't feautered"
    }
  return (
    <li>
      <p>by {newsSite}</p>
      <h3>{title}</h3>
      <img src={imageUrl} alt={imageUrl} />
      <p>{summary}</p>
      <a href={url}>{url}</a>
      <p>published at {pubAt}</p>
      <p>updated at {updAt}</p>
      <p className={styles}>{feauteredA}</p>
    </li>
  );
}


// key={item.title}
// title={item.title}
// summary={item.summary}
// authorsName={item.authors.name}
// authorsSocials={item.authors.socials}
// url={item.url}
// imageUrl={item.image_url}
// newsSite={item.news_site}
// pubAt={item.published_at}
// updAt={item.updated_at}
// feautered={item.feautered}
// launches={item.launches}
// events={item.events}