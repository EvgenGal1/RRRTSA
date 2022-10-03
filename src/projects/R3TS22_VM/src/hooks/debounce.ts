// 0.12. debounce — fn которая `откладывает` вызов другой fn по времени с последнего ответа до того момента, когда с последнего вызова пройдёт определённое количество времени. Чтоб не забивать сервер каждым нажатием клвш.
import { useEffect, useState } from "react";

// хук приним value как строку и `задержку` по умолчанию = 700
export function useDebounce(value: string, delay = 700): string {
  // локальн сост с приёмом value
  const [debounce, setDebounce] = useState(value);

  // usEf зависит от [value, delay]
  useEffect(() => {
    // в таймаут изменяем сост. value с задержкой
    const handler = setTimeout(() => setDebounce(value), delay);
    // чтоб таймаут не отрабатывал на каждое изменение в компоненте, очищаем таймаут и возвращаем его вызов handler
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounce;
}
