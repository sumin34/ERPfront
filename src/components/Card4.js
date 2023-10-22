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

    let formattedDate =
    now.getFullYear() +
    "-" +
    (now.getMonth() + 1) +
    "-" +
    now.getDate();

    let formattedTime =
      (now.getHours() < 10 ? "0" : "") + now.getHours() +
      ":" +
      (now.getMinutes() < 10 ? "0" : "") +
      now.getMinutes();

    return (
      <>
        <p class="fs-3 fw-normal font-sans-serif text-primary mb-1 lh-1">{formattedDate}</p>
        <p class="fs-0 fw-normal font-sans-serif text-primary mb-1 lh-1">{formattedTime} {dayOfWeek}</p>
        </>
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
                  {this.state.currentTime}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card4;
