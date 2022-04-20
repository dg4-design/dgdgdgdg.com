const skillList = [
  {
    name: "デザイン",
    start: dayjs("2015-05-01"),
  },
  {
    name: "映像制作",
    start: dayjs("2017-04-01"),
  },
  {
    name: "モーショングラフィックス",
    start: dayjs("2019-04-01"),
  },
  {
    name: "Web制作",
    start: dayjs("2019-10-01"),
  },
];

skillList.forEach(({ name, start }) => {
  const skillTime = dayjs() - start;
  const firstTime = dayjs() - skillList[0].start;
  const round = ~~((skillTime / firstTime) * 100);

  const li = document.createElement("li");
  li.className = "skill-item";
  $("#skillOutput").appendChild(li);

  const skillName = document.createElement("p");
  skillName.className = "skill-name";
  skillName.innerText = `${name}`;
  li.appendChild(skillName);

  const skillBar = document.createElement("div");
  skillBar.className = "skill-bar";
  li.appendChild(skillBar);

  const skillParam = document.createElement("div");
  skillParam.className = "skill-param";
  skillParam.style = `width: ${round * 0.95}%;`;
  skillBar.appendChild(skillParam);
});
