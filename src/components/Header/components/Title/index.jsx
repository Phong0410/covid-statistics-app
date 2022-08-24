import React from "react"
import { Link } from "react-router-dom"
import logo from "../../../../assets/imgs/logo.png"
import styles from "./index.module.scss"

const Title = () => {
	return (
		<>
			<img src={logo} alt="logo" className={styles.logo} />
			<Link to={"statistics"} className={styles.header}>
				COVID STATISTICS
			</Link>
		</>
	)
}

export default Title
