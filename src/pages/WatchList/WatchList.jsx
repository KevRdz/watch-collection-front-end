import WatchCard from "../../components/WatchCard/WatchCard"
import styles from './WatchList.module.css'


function WatchList(props) {
  return (
    <>
      <h1>Watch List</h1>
      <div className={styles.container}>
        {props.watches.map(watch => 
          <WatchCard key={watch._id} watch={watch} handleDeleteWatch={props.handleDeleteWatch} user={props.user}/>
        )}
      </div>
    </>
  )
}

export default WatchList