//get the section_container divs
const section_container = document.getElementsByClassName("section_container");

const save_interpretaion = document.getElementById(
  "save_interpretaion_section"
);
const Contents_list_section = document.getElementById("Contents_list_section");

// an array that contains all sections
const Section_Array = [];
//extract the sec_1, sec_2, and sec_n from section_container
for (let i = 0; i < section_container.length; i++) {
  Section_Array.push(section_container[i].children[1]);
}
Section_Array.push(save_interpretaion);
Section_Array.push(Contents_list_section);
const N = Section_Array.length;
console.log(`N = ${N}`);
//get curved svgs
const curve_svg_1 = document.getElementsByClassName("curve_svg_1");
console.log(`curve svg1 length: ${curve_svg_1.length}`)
const curve_svg_2 = document.getElementsByClassName("curve_svg_2");
const section_headers = document.getElementsByClassName("section_header");

// get the btns
const Contents_list_btn = document.getElementById("Contents_list_btn");
const convert_2_advanced_version_section_btn = document.getElementById(
  "convert_2_advanced_version_section_btn"
);
const return_btn = document.getElementById("return_btn");
const show_classic_version_btn = document.getElementById(
  "show_classic_version_btn"
);
const show_save_interpretaion_section_btn = document.getElementById(
  "show_save_interpretaion_section_btn"
);
const show_prev_section_btn = document.getElementById("show_prev_section_btn");
const showNextSection_btn = document.getElementById("showNextSection_btn");
const save_btn_on_advanced_version_sections = document.getElementById(
  "save_btn_on_advanced_version_sections"
);
const showSectionBtn_on_advanced = document.getElementById(
  "showSectionBtn_on_advanced"
);
const btns_shown_in_classic_view = document.getElementsByClassName(
  "btns_shown_in_classic_view"
);
const comment_on_mobile = document.getElementById("comment_on_mobile");
const share_on_mobile = document.getElementById("share_on_mobile");
const attachments_on_mobile = document.getElementById("attachments_on_mobile");
// get the container of previous and next btns
const Next_and_Prev_div = document.getElementById("Next_and_Prev");
//get the container of upper buttons
const upper_btns = document.getElementById("upper-btns");
// return btn in some section in mobile view
const return_button_on_mobile_type2 = document.getElementsByClassName(
  "return_button_on_mobile_type2"
);
const return_to_last_seen_section_in_classic_btn_in_advanced_sec =
  document.getElementById(
    "return_to_last_seen_section_in_classic_btn_in_advanced_sec"
  );
const return_to_last_seen_section_in_classic_btn_in_sec17 =
  document.getElementById(
    "return_to_last_seen_section_in_classic_btn_in_sec17"
  );
const return_to_last_seen_section_in_classic_btn_in_sec16 =
  document.getElementById(
    "return_to_last_seen_section_in_classic_btn_in_sec16"
  );
const path1 = document.getElementById("path1");
const path2 = document.getElementById("path2");
const path3 = document.getElementById("path3");
const path4 = document.getElementById("path4");
const lower_btn = document.getElementsByClassName("lower_btn")[0];
// get Template section
const Template = document.getElementById("Template");
// remember last active section
let last_active_section = 0;
let current_active_section = 0;
let Are_we_in_classic_view = 0;
let Are_we_go_to_advanced_section_in_mobile_menu_bar = 0;
let masi;
let visibleSectionInClassic;

const headerColorPalet = [];
const backGraoundColorPalet = [];
const colorPalet = [
  "#5996b1",
  "#dcb051",
  "#56a278",
  "#826396",
  "#e16867",
  "#3a3a3a",
];
const lightColorPellete = [
  "#98c0d0",
  "#e9cf91",
  "#93c6ad",
  "#b3a1c0",
  "#eaa2a2",
  "#dddfe2",
];

let boxForColor;
boxForColor = Section_Array.length / colorPalet.length;
boxForColor = Math.floor(boxForColor);

for (let i = 0; i < boxForColor; i++) {
  for (let j = 0; j < colorPalet.length; j++) {
    headerColorPalet.push(colorPalet[j]);
    backGraoundColorPalet.push(lightColorPellete[j]);
  }
}
for (let k = 0; k < Section_Array.length % colorPalet.length; k++) {
  headerColorPalet.push(colorPalet[k]);
  backGraoundColorPalet.push(lightColorPellete[k]);
}
console.log(headerColorPalet)

function colorize_backGround() {
  //decide to choose white color or blue color for crown svg and save svg
  const crownSVG_path1 = document.getElementById("crownSVG_path1");
  const crownSVG_path2 = document.getElementById("crownSVG_path2");
  const crownSVG_path3 = document.getElementById("crownSVG_path3");
  const saveSVG_path1 = document.getElementById("saveSVG_path1");
  const saveSVG_path2 = document.getElementById("saveSVG_path2");
  const saveSVG_path3 = document.getElementById("saveSVG_path3");
  const saveSVG_path4 = document.getElementById("saveSVG_path4");

  if (document.documentElement.scrollWidth > 768) {
    crownSVG_path1.style.stroke = "#fff";
    crownSVG_path2.style.stroke = "#fff";
    crownSVG_path3.style.stroke = "#fff";
    saveSVG_path1.style.stroke = "#fff";
    saveSVG_path2.style.stroke = "#fff";
    saveSVG_path3.style.stroke = "#fff";
    saveSVG_path4.style.stroke = "#fff";
  } else {
    crownSVG_path1.style.stroke = "#5996B1";
    crownSVG_path2.style.stroke = "#5996B1";
    crownSVG_path3.style.stroke = "#5996B1";
    saveSVG_path1.style.stroke = "#5996B1";
    saveSVG_path2.style.stroke = "#5996B1";
    saveSVG_path3.style.stroke = "#5996B1";
    saveSVG_path4.style.stroke = "#5996B1";
  }

  const content_interpretaion_btn = document.getElementsByClassName(
    "content_interpretaion_btn"
  );
  const advanced_version_btn2 = document.getElementsByClassName(
    "advanced_version_btn2"
  );

  // IF we see the page on mobile version, don't colorize upper buttons
  if (document.documentElement.scrollWidth > 768) {
    content_interpretaion_btn[0].style.color =
      headerColorPalet[current_active_section];
    content_interpretaion_btn[0].style.borderColor =
      headerColorPalet[current_active_section];

    advanced_version_btn2[0].style.backgroundColor =
      headerColorPalet[current_active_section];
    advanced_version_btn2[1].style.backgroundColor =
      headerColorPalet[current_active_section];
    advanced_version_btn2[2].style.backgroundColor =
      headerColorPalet[current_active_section];
    advanced_version_btn2[0].style.color = "#fff";

    advanced_version_btn2[1].style.color = "#fff";

    advanced_version_btn2[2].style.color = "#fff";
  } else {
    content_interpretaion_btn[0].style.color = "#5996B1";
    content_interpretaion_btn[0].style.borderColor = "#5996B1";

    advanced_version_btn2[0].style.backgroundColor = "#fff";
    advanced_version_btn2[1].style.backgroundColor = "#fff";
    advanced_version_btn2[2].style.backgroundColor = "#fff";

    advanced_version_btn2[0].style.color = "#5996B1";
    advanced_version_btn2[1].style.color = "#5996B1";
    advanced_version_btn2[2].style.color = "#5996B1";
  }

  switch (section_headers[current_active_section].style.backgroundColor) {
    case "rgb(89, 150, 177)":
      Template.style.backgroundColor = "#98c0d0";
      if (document.documentElement.scrollWidth > 768) {
        path1.style.fill = "rgb(89, 150, 177)";
        path2.style.fill = "rgb(89, 150, 177)";
        path3.style.fill = "rgb(89, 150, 177)";
        path4.style.fill = "rgb(89, 150, 177)";
      } else {
        path1.style.fill = "#5996B1";
        path2.style.fill = "#5996B1";
        path3.style.fill = "#5996B1";
        path4.style.fill = "#5996B1";
      }

      break;
    case "rgb(220, 176, 81)":
      Template.style.backgroundColor = "#e9cf91";
      if (document.documentElement.scrollWidth > 768) {
        path1.style.fill = "rgb(220, 176, 81)";
        path2.style.fill = "rgb(220, 176, 81)";
        path3.style.fill = "rgb(220, 176, 81)";
        path4.style.fill = "rgb(220, 176, 81)";
      } else {
        path1.style.fill = "#5996B1";
        path2.style.fill = "#5996B1";
        path3.style.fill = "#5996B1";
        path4.style.fill = "#5996B1";
      }

      break;
    case "rgb(86, 162, 120)":
      Template.style.backgroundColor = "#93c6ad";

      if (document.documentElement.scrollWidth > 768) {
        path1.style.fill = "rgb(86, 162, 120)";
        path2.style.fill = "rgb(86, 162, 120)";
        path3.style.fill = "rgb(86, 162, 120)";
        path4.style.fill = "rgb(86, 162, 120)";
      } else {
        path1.style.fill = "#5996B1";
        path2.style.fill = "#5996B1";
        path3.style.fill = "#5996B1";
        path4.style.fill = "#5996B1";
      }

      break;
    case "rgb(130, 99, 150)":
      Template.style.backgroundColor = "#b3a1c0";
      if (document.documentElement.scrollWidth > 768) {
        path1.style.fill = "rgb(130, 99, 150)";
        path2.style.fill = "rgb(130, 99, 150)";
        path3.style.fill = "rgb(130, 99, 150)";
        path4.style.fill = "rgb(130, 99, 150)";
      } else {
        path1.style.fill = "#5996B1";
        path2.style.fill = "#5996B1";
        path3.style.fill = "#5996B1";
        path4.style.fill = "#5996B1";
      }

      break;
    case "rgb(225, 104, 103)":
      Template.style.backgroundColor = "#eaa2a2";
      if (document.documentElement.scrollWidth > 768) {
        path1.style.fill = "rgb(225, 104, 103)";
        path2.style.fill = "rgb(225, 104, 103)";
        path3.style.fill = "rgb(225, 104, 103)";
        path4.style.fill = "rgb(225, 104, 103)";
      } else {
        path1.style.fill = "#5996B1";
        path2.style.fill = "#5996B1";
        path3.style.fill = "#5996B1";
        path4.style.fill = "#5996B1";
      }

      break;
    case "rgb(58, 58, 58)":
      Template.style.backgroundColor = "#dddfe2";
      if (document.documentElement.scrollWidth > 768) {
        path1.style.fill = "rgb(58, 58, 58)";
        path2.style.fill = "rgb(58, 58, 58)";
        path3.style.fill = "rgb(58, 58, 58)";
        path4.style.fill = "rgb(58, 58, 58)";
      } else {
        path1.style.fill = "#5996B1";
        path2.style.fill = "#5996B1";
        path3.style.fill = "#5996B1";
        path4.style.fill = "#5996B1";
      }

      break;
    default:
      break;
  }
}
// if we are on mobile version, and when we slide section, colorize upper btns
let cachedWidth = window.innerWidth;
window.addEventListener("resize", function () {
  let newWidth = window.innerWidth;
  if (newWidth !== cachedWidth) {
    //DO RESIZE HERE

    if (document.documentElement.scrollWidth > 768 && Are_we_in_classic_view) {
      convert_2_advanced_version_section_btn.style.display = "none";
      Contents_list_btn.style.display = "none";
      for (let i = 0; i <= N - 3; i++) {
        btns_shown_in_classic_view[i].style.display = "flex";
      }
    }

    if (document.documentElement.scrollWidth <= 768 && Are_we_in_classic_view) {
      convert_2_advanced_version_section_btn.style.display = "block";
      Contents_list_btn.style.display = "block";
      for (let i = 0; i <= N - 3; i++) {
        btns_shown_in_classic_view[i].style.display = "none";
      }
    }

    if (!Are_we_in_classic_view) {
      if (
        (current_active_section == N - 2 || current_active_section == N - 1) &&
        document.documentElement.scrollWidth < 768
      ) {
        upper_btns.style.display = "none";
      }

      if (
        (current_active_section == N - 2 || current_active_section == N - 1) &&
        document.documentElement.scrollWidth > 768
      ) {
        upper_btns.style.display = "flex";
      }

      if (
        !(current_active_section == N - 2 || current_active_section == N - 1) &&
        document.documentElement.scrollWidth < 768
      ) {
        upper_btns.style.display = "flex";
      }
    }

    for (let i = 0; i <= N - 3; i++) {
      if (
        document.documentElement.scrollWidth <= 768 &&
        Are_we_in_classic_view
      ) {
        Section_Array[i].style.marginTop = "3.2rem";
      }

      if (document.documentElement.scrollWidth > 768) {
        Section_Array[i].style.marginTop = "0rem";
      }

      if (
        document.documentElement.scrollWidth < 768 &&
        !Are_we_in_classic_view
      ) {
        Section_Array[i].style.marginTop = "3.2rem";
      }
    }

    Are_we_go_to_advanced_section_in_mobile_menu_bar = 0;
    switch_btns();
    colorize_backGround();
    switch_show_or_hide_Next_and_Prev_div();

    cachedWidth = newWidth;
  }
});

function colorize_each_section() {
  for (let i = 0; i < section_headers.length; i++) {
    section_headers[i].style.backgroundColor = headerColorPalet[i];
  }
  for (let i = 0; i < curve_svg_1.length; i++) {
    curve_svg_1[i].firstElementChild.firstElementChild.style.fill =
      headerColorPalet[i];
    curve_svg_2[i].firstElementChild.firstElementChild.style.fill =
      headerColorPalet[i];
  }
}
function colorize_btns_shown_in_classic() {
  for (let i = 0; i <= N - 3; i++) {
    //do all except in sec_18 ( advanced section) because in this section we have 1 btn
    if (i !== N - 4) {
      btns_shown_in_classic_view[
        i
      ].firstElementChild.firstElementChild.style.color = "#fff";
      btns_shown_in_classic_view[
        i
      ].firstElementChild.firstElementChild.style.borderColor = "#fff";
      btns_shown_in_classic_view[
        i
      ].firstElementChild.firstElementChild.style.backgroundColor =
        headerColorPalet[i];
      btns_shown_in_classic_view[
        i
      ].children[1].firstElementChild.style.backgroundColor =
        headerColorPalet[i];
      btns_shown_in_classic_view[
        i
      ].children[2].firstElementChild.style.backgroundColor =
        headerColorPalet[i];

      //in append_sec, comment_sec, and advanced section we have an extra btn (بازگشت به تفسیر)
      if (
        i === N - 7 &&
        return_to_last_seen_section_in_classic_btn_in_sec16.style.display ===
          "inline"
      ) {
        btns_shown_in_classic_view[
          i
        ].children[3].firstElementChild.style.backgroundColor =
          headerColorPalet[i];
      }
      if (
        i === N - 6 &&
        return_to_last_seen_section_in_classic_btn_in_sec17.style.display ===
          "inline"
      ) {
        btns_shown_in_classic_view[
          i
        ].children[3].firstElementChild.style.backgroundColor =
          headerColorPalet[i];
      }
    }

    if (i === N - 4) {
      btns_shown_in_classic_view[
        i
      ].firstElementChild.firstElementChild.style.color = "#fff";
      btns_shown_in_classic_view[
        i
      ].firstElementChild.firstElementChild.style.borderColor = "#fff";
      btns_shown_in_classic_view[
        i
      ].firstElementChild.firstElementChild.style.backgroundColor =
        headerColorPalet[i];
      if (
        return_to_last_seen_section_in_classic_btn_in_advanced_sec.style
          .display === "inline"
      ) {
        btns_shown_in_classic_view[
          i
        ].children[1].firstElementChild.style.backgroundColor =
          headerColorPalet[i];
      }
    }
    section_container[i].style.backgroundColor = backGraoundColorPalet[i];
  }
}
// when the page loads for the first time, show section 1
function show_sec_1() {
  //on page first loading, we colorize sections
  Template.style.backgroundColor = "#dddfe2";

  colorize_each_section();
  colorize_backGround();
  window.scrollTo({ top: 0, behavior: "smooth" });
  show_prev_section_btn.style.display = "none";

  if (
    Section_Array[current_active_section].id !== "Convert_2_advanced_version" &&
    Section_Array[current_active_section].id !== "save_interpretaion_section" &&
    current_active_section !== N - 7 &&
    current_active_section !== N - 6
  ) {
    masi = current_active_section;
  }

  //DO something on sec_18
  images_sec_18[2].classList.add("active");
}

function switch_show_or_hide_Next_and_Prev_div() {
  if (!Are_we_in_classic_view) {
    if (current_active_section > N - 3) {
      Next_and_Prev_div.style.display = "none";
      Section_Array[current_active_section].style.borderRadius =
        "20px 20px 20px 20px";
    } else {
      Next_and_Prev_div.style.display = "flex";
      Section_Array[current_active_section].style.borderRadius =
        "20px 20px 0px 0px";
    }
  }

  //fucking section
  if (
    Are_we_go_to_advanced_section_in_mobile_menu_bar &&
    !Are_we_in_classic_view &&
    current_active_section <= N - 3
  ) {
    for (let i = 0; i < return_button_on_mobile_type2.length; i++) {
      return_button_on_mobile_type2[i].style.display = "block";
    }
    upper_btns.style.display = "none";
    Next_and_Prev_div.style.display = "none";
    Section_Array[current_active_section].style.borderRadius =
      "20px 20px 20px 20px";
    // console.log('in fucking :spacebetween')

    Section_Array[current_active_section].querySelector(
      "header"
    ).style.justifyContent = "space-between";
    if (document.documentElement.scrollWidth < 768) {
      Section_Array[current_active_section].style.marginTop = "0rem";
    }
    if (document.documentElement.scrollWidth > 768) {
      Section_Array[current_active_section].style.marginTop = "0rem";
    }
  }

  if (
    !Are_we_go_to_advanced_section_in_mobile_menu_bar &&
    !Are_we_in_classic_view &&
    current_active_section <= N - 3
  ) {
    for (let i = 0; i < return_button_on_mobile_type2.length; i++) {
      return_button_on_mobile_type2[i].style.display = "none";
    }

    upper_btns.style.display = "flex";
    Next_and_Prev_div.style.display = "flex";
    Section_Array[current_active_section].style.borderRadius =
      "20px 20px 0px 0px";
    // console.log('in fucking :centereed')
    Section_Array[current_active_section].querySelector(
      "header"
    ).style.justifyContent = "center";
    if (document.documentElement.scrollWidth < 768) {
      Section_Array[current_active_section].style.marginTop = "3.2rem";
    }
    if (document.documentElement.scrollWidth > 768) {
      Section_Array[current_active_section].style.marginTop = "0rem";
    }
  }
}

function check_To_show_classic_version_btn() {
  if (Section_Array[0].style.display == "block") {
    show_classic_version_btn.style.display = "block";
    show_prev_section_btn.style.display = "none";
    show_save_interpretaion_section_btn.style.display = "block";
  } else {
    show_classic_version_btn.style.display = "none";
    show_prev_section_btn.style.display = "block";
    show_save_interpretaion_section_btn.style.display = "none";
  }
}

//show next section
function showNextSection() {
  Section_Array[current_active_section].style.display = "none";

  if (current_active_section == N - 3) {
    current_active_section = N - 4;
  }
  Section_Array[current_active_section + 1].style.display = "block";

  last_active_section = current_active_section;
  current_active_section++;
  Are_we_go_to_advanced_section_in_mobile_menu_bar = 0;
  switch_btns();
  check_To_show_classic_version_btn();
  colorize_backGround();
  switch_show_or_hide_Next_and_Prev_div();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (
    Section_Array[current_active_section].id !== "Convert_2_advanced_version" &&
    Section_Array[current_active_section].id !== "save_interpretaion_section" &&
    current_active_section !== N - 7 &&
    current_active_section !== N - 6
  ) {
    masi = current_active_section;
  }
}

//show previous section
function show_prev_section() {
  Section_Array[current_active_section].style.display = "none";

  Section_Array[current_active_section - 1].style.display = "block";

  last_active_section = current_active_section;
  current_active_section--;
  Are_we_go_to_advanced_section_in_mobile_menu_bar = 0;
  switch_btns();
  check_To_show_classic_version_btn();
  colorize_backGround();
  switch_show_or_hide_Next_and_Prev_div();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (
    Section_Array[current_active_section].id !== "Convert_2_advanced_version" &&
    Section_Array[current_active_section].id !== "save_interpretaion_section" &&
    current_active_section !== N - 7 &&
    current_active_section !== N - 6
  ) {
    masi = current_active_section;
  }
}

function switch_btns() {
  if (current_active_section <= N - 5 || current_active_section == N - 3) {
    save_btn_on_advanced_version_sections.style.display = "inline";
    //also show showSectionBtn_on_advanced on append_sec and comment_sec
    if (current_active_section !== N - 7 && current_active_section !== N - 6) {
      convert_2_advanced_version_section_btn.style.display = "inline";
      showSectionBtn_on_advanced.style.display = "none";
    }
    if (current_active_section === N - 7 || current_active_section === N - 6) {
      convert_2_advanced_version_section_btn.style.display = "none";

      if (
        last_active_section === N - 1 &&
        document.documentElement.scrollWidth > 768
      ) {
        showSectionBtn_on_advanced.style.display = "inline";
      }

      if (
        last_active_section !== N - 1 &&
        document.documentElement.scrollWidth > 768
      ) {
        console.log(`showSectionBtn_on_advanced none`);
        showSectionBtn_on_advanced.style.display = "none";
      }

      if (
        last_active_section === N - 6 &&
        document.documentElement.scrollWidth < 768
      ) {
        showSectionBtn_on_advanced.style.display = "none";
        console.log(`showSectionBtn_on_advanced none`);
      }
    }

    return_btn.style.display = "none";
    Contents_list_btn.style.display = "inline";
    upper_btns.style.display = "flex";
  }
  if (current_active_section == N - 4) {
    return_btn.style.display = "none";
    convert_2_advanced_version_section_btn.style.display = "none";
    Contents_list_btn.style.display = "inline";
    save_btn_on_advanced_version_sections.style.display = "none";
    //only if we go from content section to advanced section show showSectionBtn_on_advanced
    if (
      last_active_section !== N - 5 &&
      last_active_section !== N - 3 &&
      document.documentElement.scrollWidth > 768
    ) {
      showSectionBtn_on_advanced.style.display = "inline";
    }
    if (
      last_active_section === N - 1 &&
      document.documentElement.scrollWidth < 768
    ) {
      showSectionBtn_on_advanced.style.display = "none";
    }
    upper_btns.style.display = "flex";
  }
  if (current_active_section == N - 2 || current_active_section == N - 1) {
    save_btn_on_advanced_version_sections.style.display = "none";
    showSectionBtn_on_advanced.style.display = "none";
    return_btn.style.display = "inline";
    convert_2_advanced_version_section_btn.style.display = "none";
    Contents_list_btn.style.display = "none";
    // on mobile hide return_btn (scrolled horizontally container);
    if (
      (current_active_section == N - 2 ||
        current_active_section == N - 1 ||
        Are_we_in_classic_view) &&
      document.documentElement.scrollWidth < 768
    ) {
      upper_btns.style.display = "none";
    } else {
      upper_btns.style.display = "flex";
    }
  }
  // if we are in attachment section(append_sec) hide attachments_on_mobile btn
  if (document.documentElement.scrollWidth <= 768) {
    if (current_active_section == N - 7) {
      attachments_on_mobile.style.display = "none";
    } else {
      attachments_on_mobile.style.display = "inline";
    }

    if (current_active_section == N - 6) {
      share_on_mobile.style.display = "none";
      comment_on_mobile.style.display = "none";
    } else {
      share_on_mobile.style.display = "inline";
      comment_on_mobile.style.display = "inline";
    }
  }

  if (document.documentElement.scrollWidth > 768) {
    attachments_on_mobile.style.display = "none";
    share_on_mobile.style.display = "none";
    comment_on_mobile.style.display = "none";
  }
  // hide next-btn in sec_19
  if (current_active_section == N - 3) {
    showNextSection_btn.style.display = "none";
  }
  if (current_active_section < N - 3) {
    showNextSection_btn.style.display = "inline";
  }
}

function back_2_Previos() {
  Section_Array[last_active_section].style.display = "block";
  Section_Array[current_active_section].style.display = "none";
  let temp;
  temp = last_active_section;
  last_active_section = current_active_section;
  current_active_section = temp;
  Are_we_go_to_advanced_section_in_mobile_menu_bar = 0;
  switch_btns();
  check_To_show_classic_version_btn();
  switch_show_or_hide_Next_and_Prev_div();
  colorize_backGround();
  if (
    Section_Array[current_active_section].id !== "Convert_2_advanced_version" &&
    Section_Array[current_active_section].id !== "save_interpretaion_section" &&
    current_active_section !== N - 7 &&
    current_active_section !== N - 6
  ) {
    masi = current_active_section;
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function go_2_Contents_list_section() {
  Section_Array[N - 1].style.display = "block";
  Section_Array[current_active_section].style.display = "none";
  let temp;
  temp = current_active_section;
  current_active_section = N - 1;
  last_active_section = temp;
  Are_we_go_to_advanced_section_in_mobile_menu_bar = 0;
  switch_btns();
  check_To_show_classic_version_btn();
  switch_show_or_hide_Next_and_Prev_div();
  colorize_backGround();
}

function go_2_convert_2_advanced_version_section() {
  Section_Array[N - 4].style.display = "block";
  Section_Array[current_active_section].style.display = "none";

  let temp;
  temp = current_active_section;
  current_active_section = N - 4;
  last_active_section = temp;
  //check to investigate that user clicked advaned btn in mobile view or desktop view
  if (document.documentElement.scrollWidth > 768) {
    Are_we_go_to_advanced_section_in_mobile_menu_bar = 0;
  }
  if (document.documentElement.scrollWidth <= 768) {
    Are_we_go_to_advanced_section_in_mobile_menu_bar = 1;
  }
  switch_btns();
  check_To_show_classic_version_btn();
  switch_show_or_hide_Next_and_Prev_div();
  colorize_backGround();
}
function go_to_specific_section(section_id, from) {
  let section_index;
  //corespond section_id to section_index
  for (let i = 0; i < Section_Array.length; i++) {
    if (Section_Array[i].id === section_id) {
      section_index = i;
    }
  }

  let hidden_section_index;
  if (from == 0) {
    //if from is 0 then close the content section
    hidden_section_index = N - 1;
  } else {
    //if from=1 then close the current active section
    hidden_section_index = current_active_section;
  }
  Section_Array[hidden_section_index].style.display = "none";
  Section_Array[section_index].style.display = "block";

  current_active_section = section_index;
  last_active_section = hidden_section_index;

  if (from == 1) {
    Are_we_go_to_advanced_section_in_mobile_menu_bar = 1;
  }
  if (from == 0) {
    Are_we_go_to_advanced_section_in_mobile_menu_bar = 0;
  }

  switch_btns();
  switch_show_or_hide_Next_and_Prev_div();
  check_To_show_classic_version_btn();
  colorize_backGround();
  if (
    Section_Array[current_active_section].id !== "Convert_2_advanced_version" &&
    Section_Array[current_active_section].id !== "save_interpretaion_section" &&
    current_active_section !== N - 7 &&
    current_active_section !== N - 6
  ) {
    masi = current_active_section;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// these codes used to activeate showSectionBtn_on_advanced btn that showed in advaced section

function return_to_last_seen_section() {
  Section_Array[masi].style.display = "block";
  Section_Array[current_active_section].style.display = "none";
  let temp;
  temp = current_active_section;
  current_active_section = masi;
  last_active_section = temp;
  switch_btns();
  switch_show_or_hide_Next_and_Prev_div();
  check_To_show_classic_version_btn();
  colorize_backGround();
}
function show_classic_version() {
  // setTimeout(() => (save_interpretaion_modal.style.display = "block"), 10000);

  current_active_section = 200; //we don't needs these parameters
  last_active_section = 300; //we don't needs these parameters
  Are_we_in_classic_view = 1;
  visibleSectionInClassic = "sec_1";
  // first hide Next_Previos_btns_container divisions
  Next_and_Prev_div.style.display = "none";

  show_classic_version_btn.style.display = "none";
  lower_btn.style.display = "none";
  //hide upper_btn container in desktop view
  if (document.documentElement.scrollWidth > 768) {
    convert_2_advanced_version_section_btn.style.display = "none";
    Contents_list_btn.style.display = "none";
    save_btn_on_advanced_version_sections.style.display = "none";
  }

  //then show all sections
  for (let i = 0; i <= N - 3; i++) {
    Section_Array[i].style.display = "block";
    Section_Array[i].style.borderRadius = "20px 20px 20px 20px";
    Section_Array[i].style.marginBottom = "3rem";

    if (document.documentElement.scrollWidth < 768) {
      Section_Array[i].style.marginTop = "3.2rem";
    }
    // only shown classic btns on desktop version
    if (document.documentElement.scrollWidth > 768) {
      btns_shown_in_classic_view[i].style.display = "flex";
    }

    //remove marginTop of section_1 in desktop view
  }
  colorize_btns_shown_in_classic();
  window.scrollTo({ top: 0, behavior: "smooth" });
  //change upper buttons onclick function
  Contents_list_btn.onclick = go_to_content_in_classic;
  convert_2_advanced_version_section_btn.onclick = go_to_advanced_in_classic;
  comment_on_mobile.onclick = comment_in_classic;
  attachments_on_mobile.onclick = attachments_in_classic;
  share_on_mobile.onclick = comment_in_classic;
  save_btn_on_advanced_version_sections.onclick =
    show_save_interpretaion_section_in_classic;
  //also change the onclick of span in sec_1
  const saveInterpretaionLink_in_sec_1 = document.getElementById(
    "saveInterpretaionLink_in_sec_1"
  );
  saveInterpretaionLink_in_sec_1.onclick =
    show_save_interpretaion_section_in_classic;
  Are_we_go_to_advanced_section_in_mobile_menu_bar = 0;

  //observer on advanced section
  var observerOnAdvancedSection = new IntersectionObserver(
    function (entries) {
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap
      if (Are_we_in_classic_view) {
        if (entries[0].isIntersecting === false) {
          return_to_last_seen_section_in_classic_btn_in_advanced_sec.style.display =
            "none";
        }
      }
    },
    { threshold: [0] }
  );
  observerOnAdvancedSection.observe(
    document.querySelector("#Convert_2_advanced_version")
  );

  let observers = [];
  for (let i = 0; i <= N - 3; i++) {
    observers[i] = new IntersectionObserver(
      function (entries) {
        if (Are_we_in_classic_view) {
          if (entries[0].isIntersecting === true) {
            if (entries[0]["intersectionRatio"] > 0.5) {
              console.log(`${Section_Array[i].id} become visible`);
              //do not store append_sec, comment_sec, and advanced_sec in visibleSectionInClassic
              if (i !== N - 7 && i !== N - 6 && i !== N - 4) {
                visibleSectionInClassic = Section_Array[i].id;
              }
            }
          }
        }

        if (i === N - 7) {
          if (entries[0].isIntersecting === false) {
            return_to_last_seen_section_in_classic_btn_in_sec16.style.display =
              "none";
          }
        }

        if (i === N - 6) {
          if (entries[0].isIntersecting === false) {
            return_to_last_seen_section_in_classic_btn_in_sec17.style.display =
              "none";
          }
        }
      },
      { threshold: [0, 0.5] }
    );
    observers[i].observe(Section_Array[i]);
  }
}

function go_to_content_in_classic() {
  modal.style.display = "block";
}

function go_to_advanced_in_classic() {
  scrollToSpecificSection("Convert_2_advanced_version");
}

function show_save_interpretaion_section_in_classic() {
  save_interpretaion_modal.style.display = "block";
}
function comment_in_classic() {
  scrollToSpecificSection("comment_sec");
}
function attachments_in_classic() {
  scrollToSpecificSection("append_sec");
}
function scrollToSpecificSection(section_id) {
  document.getElementById(section_id).scrollIntoView();
  //visible return btn on advanced
  if (section_id === "Convert_2_advanced_version") {
    return_to_last_seen_section_in_classic_btn_in_advanced_sec.style.display =
      "inline";
  } else {
    return_to_last_seen_section_in_classic_btn_in_advanced_sec.style.display =
      "none";
  }
  //visible return btn on append_sec
  if (section_id === "append_sec") {
    return_to_last_seen_section_in_classic_btn_in_sec16.style.display =
      "inline";
  } else {
    return_to_last_seen_section_in_classic_btn_in_sec16.style.display = "none";
  }

  //visible return btn on comment_sec
  if (section_id === "comment_sec") {
    return_to_last_seen_section_in_classic_btn_in_sec17.style.display =
      "inline";
  } else {
    return_to_last_seen_section_in_classic_btn_in_sec17.style.display = "none";
  }

  modal.style.display = "none";
  colorize_btns_shown_in_classic();
}

function return_to_last_seen_section_in_classic() {
  // console.log(`visibleSectionInClassic:${visibleSectionInClassic}`);
  document.getElementById(visibleSectionInClassic).scrollIntoView();
}

// setTimeout(() => (save_interpretaion_modal.style.display = "block"), 10000);

//comment_sec
//hide textarea innerHtml when focused
const comments = document.getElementById("comments");

const stars = document.querySelectorAll(".star_rating div");

function MouseOver(index) {
  for (let i = 0; i <= index; i++) {
    stars[i].classList.add("active");
  }
}
function MouseOUt(index) {
  for (let i = 0; i <= index; i++) {
    stars[i].classList.remove("active");
  }
}

// the teqhique used here in star rating, I changed the mouseout event linstener function
function starMousedOver(index) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("mouseout", () => MouseOUt(i));
  }

  for (let i = 0; i < stars.length; i++) {
    if (i <= index) {
      stars[i].classList.add("active");
    } else {
      stars[i].classList.remove("active");
    }
  }
}

function starClicked(index) {
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("mouseout", () => MouseOver(i));
  }

  for (let i = 0; i <= index; i++) {
    stars[i].classList.add("active");
  }
}

function myFunction() {
  var copyText = document.getElementById("copiable_text").innerHTML;
  navigator.clipboard.writeText(copyText);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "کپی شد ";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "کپیش کنید";
}

//sec_18

const images_sec_18 = document.getElementsByClassName("images_sec_18");
const selectedImage = document.getElementById("selectedImage");
function activeInactiveImage(index) {
  switch (index) {
    case 0:
      selectedImage.style.backgroundImage = "url('./assets/menANDwoman.png')";
      break;
    case 1:
      selectedImage.style.backgroundImage = "url('./assets/MMMTIC.png')";
      break;
    case 2:
      selectedImage.style.backgroundImage = "url('./assets/MMP12.png')";
      break;
    default:
      break;
  }

  for (let i = 0; i < images_sec_18.length; i++) {
    if (i === index) {
      images_sec_18[i].classList.add("active");
    } else {
      images_sec_18[i].classList.remove("active");
    }
  }
}

// advanced version section javascript

const acc = document.getElementsByClassName("accordion");
const panels = document.getElementsByClassName("panel");
const minusSVGs = document.getElementsByClassName("minus");
const plusSVGs = document.getElementsByClassName("plus");
let minusSVG;
let plusSVG;
function showHideAccording(index) {
  plusSVG = plusSVGs[index];
  minusSVG = minusSVGs[index];
  //close all other panels and only show this specific panel
  for (let i = 0; i < panels.length; i++) {
    if (i === index) {
      if (panels[i].style.display === "none") {
        panels[i].style.display = "block";
        plusSVG.style.display = "none";
        minusSVG.style.display = "inline";
      } else {
        panels[i].style.display = "none";
        plusSVG.style.display = "inline";
        minusSVG.style.display = "none";
      }
    } else {
      panels[i].style.display = "none";
      minusSVGs[i].style.display = "none";
      plusSVGs[i].style.display = "inline";
    }
  }
}

const myVideo = document.getElementById("video1");
const crown_and_text = document.getElementsByClassName("crown_and_text");
const play_button = document.getElementById("play_button");

function playPauseVideo() {
  if (myVideo.paused) {
    myVideo.play();
    myVideo.style.height = "auto";
    play_button.style.display = "none";
    myVideo.setAttribute("controls", "");
  } else {
  }
}

// sec_19
const show_all_expert_btn = document.getElementById("show_all_expert_btn");
function show_all_experts() {
  show_all_expert_btn.style.display = "none";
  const grid_items = document.getElementsByClassName("grid_item_sec_19");
  const grid_item4 = document.getElementsByClassName("grid_item4");
  // grid_item4[0].style.gridColumnEnd = "2";
  for (let i = 0; i < grid_items.length; i++) {
    grid_items[i].style.display = "inline";
  }
}

// content modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == save_interpretaion_modal) {
    save_interpretaion_modal.style.display = "none";
  }
};

//save interpretaion modal
const save_interpretaion_modal = document.getElementById(
  "save_interpretaion_modal"
);
// Get the <span> element that closes the save interpretaion modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  save_interpretaion_modal.style.display = "none";
};
