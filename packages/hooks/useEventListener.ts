import {
  onMounted,
  onBeforeUnmount,
  watch,
  isRef,
  unref,
  type MaybeRef,
} from "vue";

//封装事件监听


export default function useEventListener(
  target: MaybeRef<EventTarget | HTMLElement | void>,
  event: string,
  handler: (e: Event) => any
) {
  if (isRef(target)) {
    watch(target, (val, oldVal) => {
      oldVal?.removeEventListener(event, handler);
      val?.addEventListener(event, handler);
    });
  } else {
    onMounted(() => target?.addEventListener(event, handler));
  }

  //目标切换了，移除事件监听
  onBeforeUnmount(() => unref(target)?.removeEventListener(event, handler));
}
