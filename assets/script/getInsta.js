const instaPostCount = 21;

const writeInsta = (getData) => {
  const useData = getData.media.data.filter(
    ({ permalink }) => !permalink.match("reel")
  );

  [...Array(instaPostCount)].forEach((v, i) => {
    const instaPost = c$();
    instaPost.className = "post-photo";
    g$("#postList").appendChild(instaPost);

    const instaLink = c$("a");
    instaLink.href = useData[i].permalink;
    instaLink.target = "_blank";
    instaLink.rel = "noopener noreferrer";
    instaPost.appendChild(instaLink);

    const instaImg = c$("img");
    instaImg.src = useData[i].media_url;
    instaLink.appendChild(instaImg);
  });
};

const instaUrl = `https://graph.facebook.com/v3.0/17841445773642608?fields=name%2Cmedia.limit(${
  instaPostCount * 2
})%7Bmedia_url%2Cpermalink%7D&access_token=EABFZByCZAxiGABAIRfTq7Ed6i1aSv29Ybhfa9gZCa5eDy7OQlMDjyYKznYicaChlUJMRmD3Lb7hOFDRhsv0pryvZBTHZAjZAUUZCZC1Xgbb20mJIHpge1Gvp7P0I7kwvqZCt0xyfvwwGjVuJ7Y1ZAfyZAWgUf0Xg9ZAcNaZBhVUtAExWYp2LqkZCPrlYAV`;

fetch(instaUrl)
  .then((response) => response.json())
  .then((data) => writeInsta(data));
