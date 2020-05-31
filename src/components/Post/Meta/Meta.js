// @flow strict
import React from "react";
import moment from "moment";
import styles from "./Meta.module.scss";

type Props = {
  date: string,
};

const Meta = ({ date }: Props) => (
  <div className={styles["meta"]}>
    <p className={styles["meta__date"]}>
      Đăng ngày {moment(date).format("DD/MM/YYYY")}
    </p>
  </div>
);

export default Meta;
