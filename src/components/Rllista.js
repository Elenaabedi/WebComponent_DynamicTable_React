export function Rllista(props) {

  function linia(elemento) {
    let arrayLinia = [];
    props.cap.forEach((ele) => {
      let prop = ele.camp;
      if (prop in elemento) {
        arrayLinia.push(<td>{elemento[prop]}</td>);
      } else {
        arrayLinia.push(<td></td>);
      }
    });

    return arrayLinia;
  }

  function totalitzar() {
    let arrayTotal = [];
    props.cap.forEach((ele, index) => {
      if (index == props.total[1]) {
        arrayTotal.push(<td>{props.total[0]}</td>);
      } else {
        arrayTotal.push(<td></td>);
      }
    });

    return arrayTotal;
  }

  let arrayTtl = totalitzar();

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            {props.cap.map((ele) => (
              <th>{ele.cabc}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.dades.map((elem) => (
            <tr>{linia(elem)}</tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {arrayTtl}
          </tr>
        </tfoot>
      </table>
    </>
  );
}
