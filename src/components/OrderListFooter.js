function OrderListFooter() {
  return (
    <div class="card-footer">
      <div class="d-flex align-items-center justify-content-center">
        <button
          class="btn btn-sm btn-falcon-default me-1"
          type="button"
          title="Previous"
          data-list-pagination="prev"
        >
          <span class="fas fa-chevron-left"></span>
        </button>
        <ul class="pagination mb-0"></ul>
        <button
          class="btn btn-sm btn-falcon-default ms-1"
          type="button"
          title="Next"
          data-list-pagination="next"
        >
          <span class="fas fa-chevron-right"> </span>
        </button>
      </div>
    </div>
  );
}

export default OrderListFooter;
