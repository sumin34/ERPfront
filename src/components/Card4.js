import React, { Component } from "react";

class Card4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: this.todayTimeFormal(),
    };
  }

  componentDidMount() {
    // 1초마다 시간 업데이트
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: this.todayTimeFormal(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트되면 타이머 해제
    clearInterval(this.intervalId);
  }

  todayTimeFormal = () => {
    // 현재 년/월/일/시간
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth =
      now.getMonth() + 1 > 9 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
    let todayDate = now.getDate() > 9 ? now.getDate() : "0" + now.getDate();
    let hours;
    if (now.getHours() < 12) {
      hours = now.getHours() > 9 ? now.getHours() : "0" + now.getHours();
      hours = "AM " + hours;
    } else {
      hours =
        now.getHours() - 12 > 9
          ? now.getHours() - 12
          : "0" + (now.getHours() - 12);
      hours = "PM " + hours;
    }
    let minutes =
      now.getMinutes() > 9 ? now.getMinutes() : "0" + now.getMinutes();
    const week = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    let dayOfWeek = week[now.getDay()];

    return (
      todayYear +
      "-" +
      todayMonth +
      "-" +
      todayDate +
      " " +
      hours +
      ":" +
      minutes +
      " " +
      dayOfWeek
    );
  };

  render() {
    return (
      <div class="col-md-6 col-xxl-3">
        <div class="card h-md-100 ecommerce-card-min-width">
          <div class="card-header pb-0">
            <h6 class="mb-0 mt-2 d-flex align-items-center">날짜</h6>
          </div>
          <div class="card-body d-flex flex-column justify-content-end">
            <div class="row">
              <div class="col">
                <p class="fs-4 fw-normal font-sans-serif text-primary mb-1 lh-1">
                  {this.state.currentTime}
                </p>
              </div>
              <div class="col-auto ps-0">
                <div class="echart-bar-weekly-sales h-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card4;
