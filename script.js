const regionData = {
  seoul: {
    name: "서울특별시",
    sigungu: {
      songpa: {
        name: "송파구",
        placeTypes: {
          stadium: {
            name: "경기장/공연장",
            spots: [
              { value: "jamsilStadium", name: "잠실종합운동장", base: 18000, peak: "21:00~22:00" },
              { value: "lotteConcertHall", name: "롯데콘서트홀", base: 9000, peak: "20:00~21:00" }
            ]
          },
          station: {
            name: "역/환승센터",
            spots: [
              { value: "jamsilStation", name: "잠실역", base: 16000, peak: "18:00~20:00" }
            ]
          }
        }
      },
      gangnam: {
        name: "강남구",
        placeTypes: {
          station: {
            name: "역/환승센터",
            spots: [
              { value: "gangnamStation", name: "강남역", base: 22000, peak: "18:00~20:00" }
            ]
          },
          market: {
            name: "상권",
            spots: [
              { value: "garosuGil", name: "가로수길", base: 12000, peak: "15:00~19:00" }
            ]
          }
        }
      }
    }
  },

  busan: {
    name: "부산광역시",
    sigungu: {
      haeundae: {
        name: "해운대구",
        placeTypes: {
          tour: {
            name: "관광지",
            spots: [
              { value: "haeundaeBeach", name: "해운대해수욕장", base: 17000, peak: "14:00~18:00" }
            ]
          },
          station: {
            name: "역/환승센터",
            spots: [
              { value: "haeundaeStation", name: "해운대역", base: 11000, peak: "17:00~19:00" }
            ]
          }
        }
      },
      suyeong: {
        name: "수영구",
        placeTypes: {
          tour: {
            name: "관광지",
            spots: [
              { value: "gwangalli", name: "광안리해수욕장", base: 15000, peak: "19:00~21:00" }
            ]
          },
          festival: {
            name: "축제장",
            spots: [
              { value: "busanFireworks", name: "부산불꽃축제 행사장", base: 30000, peak: "20:00~22:00" }
            ]
          }
        }
      }
    }
  },

  incheon: {
    name: "인천광역시",
    sigungu: {
      junggu: {
        name: "중구",
        placeTypes: {
          station: {
            name: "공항/교통 거점",
            spots: [
              { value: "incheonAirport", name: "인천공항", base: 22000, peak: "17:00~19:00" }
            ]
          },
          tour: {
            name: "관광지",
            spots: [
              { value: "wolmido", name: "월미도", base: 9000, peak: "15:00~19:00" }
            ]
          }
        }
      },
      yeonsu: {
        name: "연수구",
        placeTypes: {
          tour: {
            name: "관광지",
            spots: [
              { value: "songdoPark", name: "송도 센트럴파크", base: 10000, peak: "14:00~18:00" }
            ]
          }
        }
      }
    }
  },

  daejeon: {
    name: "대전광역시",
    sigungu: {
      junggu: {
        name: "중구",
        placeTypes: {
          market: {
            name: "상권",
            spots: [
              { value: "daejeonCenter", name: "대전 중앙로", base: 9000, peak: "15:00~18:00" }
            ]
          },
          station: {
            name: "역/환승센터",
            spots: [
              { value: "daejeonStation", name: "대전역", base: 13000, peak: "17:00~19:00" }
            ]
          }
        }
      },
      yuseong: {
        name: "유성구",
        placeTypes: {
          tour: {
            name: "관광지",
            spots: [
              { value: "expoPark", name: "엑스포과학공원", base: 8000, peak: "13:00~17:00" }
            ]
          }
        }
      }
    }
  },

  gyeonggi: {
    name: "경기도",
    sigungu: {
      suwon: {
        name: "수원시",
        placeTypes: {
          station: {
            name: "역/환승센터",
            spots: [
              { value: "suwonStation", name: "수원역", base: 14000, peak: "18:00~20:00" }
            ]
          },
          stadium: {
            name: "경기장/공연장",
            spots: [
              { value: "suwonWorldCup", name: "수원월드컵경기장", base: 13000, peak: "19:00~21:00" }
            ]
          }
        }
      },
      hwaseong: {
        name: "화성시",
        placeTypes: {
          station: {
            name: "역/환승센터",
            spots: [
              { value: "dongtanStation", name: "동탄역", base: 12000, peak: "18:00~20:00" }
            ]
          },
          stadium: {
            name: "경기장/공연장",
            spots: [
              { value: "hwaseongStadium", name: "화성종합경기타운", base: 10000, peak: "18:00~21:00" }
            ]
          }
        }
      },
      goyang: {
        name: "고양시",
        placeTypes: {
          stadium: {
            name: "경기장/공연장",
            spots: [
              { value: "kintex", name: "고양 킨텍스", base: 16000, peak: "17:00~20:00" }
            ]
          }
        }
      }
    }
  },

  jeju: {
    name: "제주특별자치도",
    sigungu: {
      jejuCity: {
        name: "제주시",
        placeTypes: {
          station: {
            name: "공항/교통 거점",
            spots: [
              { value: "jejuAirport", name: "제주공항", base: 17000, peak: "16:00~19:00" }
            ]
          },
          tour: {
            name: "관광지",
            spots: [
              { value: "yongduam", name: "용두암", base: 7000, peak: "13:00~17:00" }
            ]
          }
        }
      },
      seogwipo: {
        name: "서귀포시",
        placeTypes: {
          tour: {
            name: "관광지",
            spots: [
              { value: "seongsan", name: "성산일출봉", base: 10000, peak: "09:00~12:00" },
              { value: "jungmun", name: "중문관광단지", base: 11000, peak: "14:00~18:00" }
            ]
          }
        }
      }
    }
  }
};

function updateSigunguOptions() {
  const sido = document.getElementById("sido").value;
  const sigunguSelect = document.getElementById("sigungu");

  sigunguSelect.innerHTML = "";

  const sigunguData = regionData[sido].sigungu;

  Object.keys(sigunguData).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = sigunguData[key].name;
    sigunguSelect.appendChild(option);
  });

  updatePlaceTypeOptions();
}

function updatePlaceTypeOptions() {
  const sido = document.getElementById("sido").value;
  const sigungu = document.getElementById("sigungu").value;
  const placeTypeSelect = document.getElementById("placeType");

  placeTypeSelect.innerHTML = "";

  const placeTypeData = regionData[sido].sigungu[sigungu].placeTypes;

  Object.keys(placeTypeData).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = placeTypeData[key].name;
    placeTypeSelect.appendChild(option);
  });

  updateSpotOptions();
}

function updateSpotOptions() {
  const sido = document.getElementById("sido").value;
  const sigungu = document.getElementById("sigungu").value;
  const placeType = document.getElementById("placeType").value;
  const spotSelect = document.getElementById("spot");

  spotSelect.innerHTML = "";

  const spots = regionData[sido].sigungu[sigungu].placeTypes[placeType].spots;

  spots.forEach(spot => {
    const option = document.createElement("option");
    option.value = spot.value;
    option.textContent = spot.name;
    spotSelect.appendChild(option);
  });
}

function getSelectedSpotData() {
  const sido = document.getElementById("sido").value;
  const sigungu = document.getElementById("sigungu").value;
  const placeType = document.getElementById("placeType").value;
  const spot = document.getElementById("spot").value;

  const spots = regionData[sido].sigungu[sigungu].placeTypes[placeType].spots;
  return spots.find(item => item.value === spot);
}

function runPrediction() {
  const selectedSpot = getSelectedSpotData();
  const sido = document.getElementById("sido").value;
  const sigungu = document.getElementById("sigungu").value;
  const placeType = document.getElementById("placeType").value;
  const day = document.getElementById("day").value;
  const weather = document.getElementById("weather").value;
  const eventType = document.getElementById("eventType").value;
  const visitors = Number(document.getElementById("visitors").value);
  const time = document.getElementById("time").value;
  const parking = Number(document.getElementById("parking").value);
  const transit = document.getElementById("transit").value;

  let score = 25;
  let population = selectedSpot.base + Math.round(visitors * 0.45);
  let reasons = [];

  const sidoName = regionData[sido].name;
  const sigunguName = regionData[sido].sigungu[sigungu].name;
  const placeTypeName = regionData[sido].sigungu[sigungu].placeTypes[placeType].name;

  reasons.push(`${sidoName} ${sigunguName}의 ${selectedSpot.name}은 ${placeTypeName} 유형의 주요 혼잡 예측 거점입니다.`);

  if (placeType === "stadium") {
    score += 18;
    reasons.push("경기장·공연장은 행사 시작 전과 종료 후 인파가 집중됩니다.");
  } else if (placeType === "tour") {
    score += 14;
    reasons.push("관광지는 주말과 날씨 조건에 따라 방문객 변동이 큽니다.");
  } else if (placeType === "market") {
    score += 10;
    reasons.push("상권 지역은 오후·저녁 시간대 생활 이동량이 증가합니다.");
  } else if (placeType === "festival") {
    score += 22;
    reasons.push("축제장은 단기간에 보행자와 차량 수요가 급증합니다.");
  } else {
    score += 12;
    reasons.push("역·터미널은 출퇴근 및 환승 수요가 지속적으로 발생합니다.");
  }

  if (day === "weekend") {
    score += 16;
    population += 3500;
    reasons.push("주말·공휴일 요인으로 여가 및 행사 이동이 증가합니다.");
  } else {
    score += 7;
    population += 1400;
    reasons.push("평일 요인으로 출퇴근·통학 이동 수요가 반영됩니다.");
  }

  if (weather === "rain") {
    score += 14;
    population += 2000;
    reasons.push("우천 시 대중교통 집중과 차량 정체 가능성이 증가합니다.");
  } else if (weather === "snow") {
    score += 20;
    population += 2600;
    reasons.push("강설 시 보행 안전 위험과 도로 정체 가능성이 커집니다.");
  } else if (weather === "heat") {
    score += 10;
    population += 1200;
    reasons.push("폭염 시 실내시설·대중교통 수요가 증가할 수 있습니다.");
  } else {
    score += 5;
    population += 900;
    reasons.push("맑은 날씨는 야외 활동 증가 요인으로 작용합니다.");
  }

  if (eventType === "concert") {
    score += 26;
    population += 7000;
    reasons.push("콘서트 종료 시간대 택시·버스·보행 수요가 집중됩니다.");
  } else if (eventType === "sports") {
    score += 22;
    population += 5600;
    reasons.push("스포츠 경기 전후로 주차장과 대중교통 승강장이 혼잡해집니다.");
  } else if (eventType === "festival") {
    score += 24;
    population += 6200;
    reasons.push("지역 축제는 가족 단위 방문객과 차량 유입을 동시에 증가시킵니다.");
  } else {
    score += 3;
    reasons.push("행사가 없는 경우 일상 이동 패턴 중심으로 예측합니다.");
  }

  if (time === "evening") {
    score += 17;
    population += 3000;
    reasons.push("저녁 시간대는 퇴근·약속·행사 종료 수요가 겹칩니다.");
  } else if (time === "night") {
    score += 11;
    population += 1500;
    reasons.push("밤 시간대는 귀가 수요와 택시 수요가 증가할 수 있습니다.");
  } else if (time === "afternoon") {
    score += 9;
    population += 1300;
    reasons.push("오후 시간대는 상권·관광지 방문 수요가 반영됩니다.");
  } else {
    score += 7;
    population += 1000;
    reasons.push("오전 시간대는 출근·등교 수요가 반영됩니다.");
  }

  if (parking <= 2) {
    score += 12;
    reasons.push("주변 주차장 수가 부족하여 불법 주정차와 우회 수요가 증가할 수 있습니다.");
  } else if (parking <= 5) {
    score += 6;
    reasons.push("주차 수용량이 보통 수준으로, 피크 시간대 주차 안내가 필요합니다.");
  } else {
    score -= 4;
    reasons.push("주차장 수가 충분하여 차량 혼잡 위험이 일부 완화됩니다.");
  }

  if (transit === "low") {
    score += 13;
    reasons.push("대중교통 접근성이 낮아 자가용 집중과 주차난 가능성이 큽니다.");
  } else if (transit === "medium") {
    score += 5;
    reasons.push("대중교통 접근성이 보통 수준이므로 주요 시간대 환승 관리가 필요합니다.");
  } else {
    score -= 5;
    reasons.push("대중교통 접근성이 높아 차량 혼잡 위험이 일부 완화됩니다.");
  }

  score = Math.max(0, Math.min(100, score));

  const normal = Math.max(1, Math.round(population / (1 + score / 120)));
  const increase = Math.round((population / normal - 1) * 100);

  const result = getRiskResult(score);
  const resources = getResourcePlan(score, population);
  const actions = getDepartmentActions(result.levelNumber, eventType, weather, transit);
  const notice = makeNotice(`${sidoName} ${sigunguName} ${selectedSpot.name}`, result.risk, result.level, selectedSpot.peak);

  setText("selectedSpot", selectedSpot.name);
  setText("population", `${population.toLocaleString()}명`);
  setText("increase", `+${increase}%`);
  setText("risk", result.risk);
  setText("level", result.level);
  setText("peakTime", selectedSpot.peak);

  setClass("risk", result.className);
  setClass("level", result.className);

  setList("reasonList", reasons);
  setList("trafficActions", actions.traffic);
  setList("safetyActions", actions.safety);
  setList("publicActions", actions.public);

  setText("busCount", `${resources.bus}대`);
  setText("staffCount", `${resources.staff}명`);
  setText("guideCount", `${resources.guide}명`);
  setText("noticeText", notice);

  updateMap(score);

  document.getElementById("analysis").classList.remove("hidden");
  document.getElementById("decision").classList.remove("hidden");
  document.getElementById("notice").classList.remove("hidden");

  document.getElementById("analysis").scrollIntoView({ behavior: "smooth" });
}

function getRiskResult(score) {
  if (score >= 82) {
    return { risk: "매우 혼잡", level: "4단계 비상 대응", levelNumber: 4, className: "level4" };
  }
  if (score >= 64) {
    return { risk: "혼잡", level: "3단계 적극 대응", levelNumber: 3, className: "level3" };
  }
  if (score >= 45) {
    return { risk: "주의", level: "2단계 사전 대응", levelNumber: 2, className: "level2" };
  }
  return { risk: "보통", level: "1단계 모니터링", levelNumber: 1, className: "level1" };
}

function getResourcePlan(score, population) {
  const bus = Math.max(0, Math.ceil(score / 25) - 1);
  const staff = Math.max(4, Math.ceil(population / 1200));
  const guide = Math.max(2, Math.ceil(population / 2500));
  return { bus, staff, guide };
}

function getDepartmentActions(level, eventType, weather, transit) {
  const traffic = [];
  const safety = [];
  const publicActions = [];

  if (level === 1) {
    traffic.push("주요 교차로와 정류장 교통량을 모니터링합니다.");
    safety.push("현장 안전 상태를 정기 점검합니다.");
    publicActions.push("필요 시 안내 문구를 사전 준비합니다.");
  }

  if (level >= 2) {
    traffic.push("혼잡 예상 시간대 교통 안내 인력을 배치합니다.");
    traffic.push("공영주차장 위치와 우회 경로를 사전 안내합니다.");
    safety.push("보행 동선과 병목 구간을 점검합니다.");
    publicActions.push("시민 대상 혼잡 예상 알림을 발송합니다.");
  }

  if (level >= 3) {
    traffic.push("임시 셔틀버스 운행 및 버스 배차 간격 단축을 검토합니다.");
    traffic.push("택시 승강장과 승하차 구역을 분산 운영합니다.");
    safety.push("핵심 출입구와 횡단보도에 안전요원을 추가 배치합니다.");
    safety.push("응급차 진입로와 긴급 대피 동선을 확보합니다.");
    publicActions.push("전광판, 앱, 홈페이지를 통해 혼잡 시간과 우회 정보를 안내합니다.");
  }

  if (level >= 4) {
    traffic.push("비상 교통대책반을 가동하고 주요 도로 우회 유도를 실시합니다.");
    safety.push("경찰·소방 등 유관기관 협조 체계를 가동합니다.");
    publicActions.push("재난문자 수준의 긴급 혼잡 알림 발송을 검토합니다.");
  }

  if (eventType !== "none") {
    safety.push("행사 시작 전·종료 후 인파 분산 계획을 적용합니다.");
  }

  if (weather === "rain" || weather === "snow") {
    safety.push("우천·강설 대비 미끄럼 사고 예방 조치를 강화합니다.");
  }

  if (transit === "low") {
    traffic.push("자가용 집중에 대비하여 임시 주차장과 순환버스 운영을 검토합니다.");
  }

  return { traffic, safety, public: publicActions };
}

function makeNotice(placeName, risk, level, peakTime) {
  return `[MoveCast AI 시민 안내문]

금일 ${placeName} 일대는 ${peakTime} 사이 혼잡도가 '${risk}' 수준으로 예측됩니다.

대응 단계: ${level}

시민 여러분께서는 가급적 대중교통을 이용해 주시고, 현장 방문 시 안내요원의 지시에 따라 이동해 주시기 바랍니다.

주요 안내:
- 혼잡 시간대 우회 이동 권장
- 인근 공영주차장 및 대중교통 이용 권장
- 보행자 밀집 구간에서는 안전거리 유지

본 안내는 도시 혼잡 예측 결과를 기반으로 자동 생성되었습니다.`;
}

function updateMap(score) {
  const zones = document.querySelectorAll(".map-zone");
  zones.forEach(zone => {
    zone.style.background = "#16a34a";
  });

  if (score >= 45) document.querySelector(".z4").style.background = "#ca8a04";
  if (score >= 64) document.querySelector(".z3").style.background = "#ea580c";
  if (score >= 82) document.querySelector(".z2").style.background = "#dc2626";
}

function setText(id, value) {
  document.getElementById(id).textContent = value;
}

function setClass(id, className) {
  const el = document.getElementById(id);
  el.className = "";
  el.classList.add(className);
}

function setList(id, items) {
  const list = document.getElementById(id);
  list.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function copyNotice() {
  const text = document.getElementById("noticeText").textContent;

  navigator.clipboard.writeText(text).then(() => {
    alert("시민 알림 문구가 복사되었습니다.");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateSigunguOptions();

  document.getElementById("sido").addEventListener("change", updateSigunguOptions);
  document.getElementById("sigungu").addEventListener("change", updatePlaceTypeOptions);
  document.getElementById("placeType").addEventListener("change", updateSpotOptions);
});
