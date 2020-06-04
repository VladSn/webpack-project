import * as $ from "jquery";

function creareAnalytics(): object {
  let counter = 0;
  let isDestroyed: boolean = false;

  const listner = (): number => counter++;

  $(document).on("click", listner);

  return {
    destroy() {
      $(document).off("click", listner);
      isDestroyed = true;
    },
    getClicks() {
      if (isDestroyed) {
        return "Analitics is destroyed";
      }
      return counter;
    },
  };
}

window["analytics"] = creareAnalytics();
