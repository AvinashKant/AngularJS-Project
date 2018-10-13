-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2018 at 09:53 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `angularjs`
--

-- --------------------------------------------------------

--
-- Table structure for table `aj_user`
--

CREATE TABLE `aj_user` (
  `id` int(11) NOT NULL,
  `user_email` varchar(80) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `aj_user`
--

INSERT INTO `aj_user` (`id`, `user_email`, `user_password`, `create_at`, `updated_at`) VALUES
(1, 'abc@abc.com', 'e10adc3949ba59abbe56e057f20f883e', '2018-07-02 11:01:35', '2018-07-02 11:01:35'),
(2, 'abc@abc.com', 'e10adc3949ba59abbe56e057f20f883e', '2018-07-02 11:02:29', '2018-07-02 11:02:29'),
(3, 'abc@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', '2018-07-04 06:47:48', '2018-07-04 06:47:48'),
(4, 'op@op.com', '815c00b9e3a894aa596da796e587be2e', '2018-07-04 06:53:06', '2018-07-04 06:53:06'),
(5, '12@12.com', '46369ce0f7b80b19e67ef4959ab0a879', '2018-08-01 06:47:44', '2018-08-01 06:47:44');

-- --------------------------------------------------------

--
-- Table structure for table `aj_user_profile`
--

CREATE TABLE `aj_user_profile` (
  `id` int(11) NOT NULL,
  `username` varchar(80) DEFAULT NULL,
  `age` tinyint(3) NOT NULL DEFAULT '0',
  `gender` varchar(8) DEFAULT NULL,
  `abutme` varchar(1000) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `aj_user_profile`
--

INSERT INTO `aj_user_profile` (`id`, `username`, `age`, `gender`, `abutme`, `create_at`, `updated_at`) VALUES
(2, 'Avinash kant', 82, '', 'i am very hard and honest', '2018-08-01 11:21:45', '2018-08-01 13:12:41');

-- --------------------------------------------------------

--
-- Table structure for table `my_daily_expenses`
--

CREATE TABLE `my_daily_expenses` (
  `id` int(11) NOT NULL,
  `expensedate` date DEFAULT NULL,
  `expensemonth` tinyint(3) DEFAULT NULL,
  `expenseyear` year(4) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `amount` decimal(10,2) NOT NULL DEFAULT '0.00',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aj_user`
--
ALTER TABLE `aj_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `aj_user_profile`
--
ALTER TABLE `aj_user_profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `my_daily_expenses`
--
ALTER TABLE `my_daily_expenses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aj_user`
--
ALTER TABLE `aj_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `my_daily_expenses`
--
ALTER TABLE `my_daily_expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
