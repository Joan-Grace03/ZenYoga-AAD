import '../assets/css/Table.css'
const Table = () => {
    return (
        <div className='main'>
        <div className='shadow data-table-container'>
          <table className='data-table'>
            <thead className='data-table-thead shadow'>
              <tr>
                <th>
                  Product ID
                </th>
                <th>
                  Product Name
                </th>
                <th>
                  Product Price
                </th>
              </tr>
            </thead>
             <tbody>
                <tr>
                  <td >1.</td>
                  <td >Hatha Yoga Certification Course</td>
                  <td >200</td>
                </tr>
                <tr>
                  <td >2.</td>
                  <td >Vinyasa Flow Yoga Certification Course</td>
                  <td >200</td>
                </tr>
                <tr>
                  <td >3.</td>
                  <td >Yin Yoga Certification Course</td>
                  <td >200</td>
                </tr>
                <tr>
                  <td >4.</td>
                  <td >Kundalini Yoga Certification Course</td>
                  <td >200</td>
                </tr>
                <tr>
                  <td >5.</td>
                  <td >Restorative Yoga Certification Course</td>
                  <td >200</td>
                </tr>
                <tr>
                  <td >6.</td>
                  <td >Ashtanga Yoga Certification Course</td>
                  <td >200</td>
                </tr>
                <tr>
                  <td >7.</td>
                  <td >Iyengar Yoga Certification Course</td>
                  <td >200</td>
                </tr>
                <tr>
                  <td >8.</td>
                  <td >Bikram Yoga Certification Course</td>
                  <td >200</td>
                </tr>
                <tr>
                  <td >9.</td>
                  <td >Power Yoga Certification Course</td>
                  <td >200</td>
                </tr>
                <tr>
                  <td >10.</td>
                  <td >Kripalu Yoga Certification Course</td>
                  <td >200</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    )
}
export default Table;