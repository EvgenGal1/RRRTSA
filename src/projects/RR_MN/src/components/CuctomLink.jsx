import { Link, useMatch } from "react-router-dom";
// хук useMatch (опред актив-ть ссылки)

// передаем props. children (дочь.эл.) + to (путь?), + др. props (стили,)
const CuctomLink = ({ children, to, ...props }) => {
  //  резулт. выполн. что-то приним. Для подробностей по хуку ctrl + ЛКМ
  // приним. pattern`шаблон` или стр. Здесь прост варик стр - to
  // возвращ. true(PathMatch(гибк.настр.) | null) е/и ссылка в параметре равна открытой
  const match = useMatch(to);

  return (
    // возвращ Link, перед этим конфигурируем его(приним props)
    // Link оборач во что угодно
    <Link
      to={to}
      {...props}
      // стили зависим от match
      style={{ color: match ? "var(--color-active)" : "white" }}
    >
      {/* отраж дейст пользов в теле ссылки */}
      {children}
    </Link>
  );
};

// экспорт кастомной ссылки в использ. комп и замена на Link/NavLink
export { CuctomLink };
