-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2023 at 06:22 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testingpc`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderID` int(11) NOT NULL,
  `tests` varchar(100) NOT NULL,
  `parameters` varchar(100) NOT NULL,
  `sampleName` varchar(50) NOT NULL,
  `shelfLife` varchar(50) NOT NULL,
  `storage` varchar(50) NOT NULL,
  `sampleType` varchar(50) NOT NULL,
  `hazardous` varchar(50) NOT NULL,
  `sampleDisposition` varchar(50) NOT NULL,
  `agree` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderID`, `tests`, `parameters`, `sampleName`, `shelfLife`, `storage`, `sampleType`, `hazardous`, `sampleDisposition`, `agree`) VALUES
(1, 'DSC-Modulated', 'divesh', 'divesh', 'divesh', 'divesh', 'divesh', 'divesh', 'divesh', 1),
(2, 'DSC-Modulated', 'divesh', 'divesh', 'divesh', 'divesh', 'divesh', 'divesh', 'divesh', 1),
(3, 'DSC-Modulated', 'divesh', 'divesh', 'divesh', 'divesh', 'divesh', 'divesh', 'divesh', 1),
(4, 'TGA', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 1),
(5, 'DSC-Modulated', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 1),
(6, 'DSC-Modulated', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 'hi', 1);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `paymentID` int(11) NOT NULL,
  `paymentslip` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`paymentID`, `paymentslip`) VALUES
(17, '64adbe5b67457_Screenshot 2023-05-16 233135.png'),
(18, '64adc41b148fe_Screenshot 2023-05-16 233135.png'),
(19, '64ae136f1fede_Screenshot 2023-05-16 233135.png'),
(20, '64ae138e4bc21_Screenshot 2023-05-16 233135.png'),
(21, '64ae13f3e0ac2_Screenshot 2023-05-16 233135.png'),
(22, '64ae140788df2_Screenshot 2023-05-16 233135.png'),
(23, '64ae141d258ad_Screenshot 2023-05-16 233135.png'),
(24, '64ae1430e50b8_Screenshot 2023-05-16 233135.png'),
(25, '64ae143ee43d1_Screenshot 2023-05-16 233135.png'),
(26, '64ae144cdb514_Screenshot 2023-05-16 233135.png'),
(27, '64ae182cc7425_'),
(28, '64ae1a56d77ad_'),
(29, '64ae1db333dd6_'),
(30, '64ae203d15ce1_'),
(31, '64ae20c7de483_'),
(32, '64ae23e4d2122_'),
(33, '64ae23f7161f2_'),
(34, '64ae24583d9cf_'),
(35, '64ae24617006f_'),
(36, '64ae323bbbb98_'),
(37, '64ae324c49b32_Screenshot 2023-06-15 194318.png'),
(38, '64ae3257d7856_Screenshot 2023-06-15 194318.png'),
(39, '64ae470652e5c_Screenshot 2023-06-15 194318.png'),
(40, '64ae47e110d68_'),
(41, '64ae4ca26b6ef_Screenshot 2023-06-15 194318.png'),
(42, '64ae4cf436392_Screenshot 2023-06-15 194318.png'),
(43, '64ae4d289d586_Screenshot 2023-06-15 194318.png'),
(44, '64ae975e887c4_Screenshot 2023-06-15 194318.png'),
(45, '64ae977c3bbd4_Screenshot 2023-06-15 194318.png'),
(46, '64ae97893dd80_Screenshot 2023-06-15 194318.png'),
(47, '64ae9a336695e_'),
(48, '64ae9a8c7ef7f_'),
(49, '64ae9aa7987a6_'),
(50, '64ae9b4deca7d_'),
(51, '64ae9b6d93e97_'),
(52, '64ae9bb2a4f91_'),
(53, '64ae9bcfafd6f_'),
(54, '64ae9bdf83217_'),
(55, '64ae9fae4bd0c_'),
(56, '64aea05c79cff_'),
(57, '64aea086a666e_'),
(58, '64aea09c60092_'),
(59, '64aea0c5788a2_'),
(60, '64aea4854d3e2_Screenshot 2023-06-15 194318.png'),
(61, '64aea5731774b_'),
(62, '64aea87caf4c1_'),
(63, '64aea9330812b_'),
(64, '64aea94f3bc5b_'),
(65, '64aea98a24935_'),
(66, '64aea9ec41be0_'),
(67, '64aeaafcd7ae8_Screenshot 2023-06-15 194318.png'),
(68, '64aeab11d4043_Screenshot 2023-06-15 194318.png'),
(69, '64aeac813d4b9_'),
(70, '64aeac85b15db_'),
(71, '64aeac9223009_'),
(72, '64aeacd43c8b5_'),
(73, 'C:\\xampp\\htdocs\\TestingPc\\backend\\payment/1689173334_64aebd566e8f3.png'),
(74, 'C:\\xampp\\htdocs\\TestingPc\\backend\\payment/1689173377_64aebd8128874.png'),
(75, 'C:\\xampp\\htdocs\\TestingPc\\backend\\payment/1689173381_64aebd8550eae.png'),
(76, 'C:\\xampp\\htdocs\\TestingPc\\backend\\payment/1689173390_64aebd8e3e381.png'),
(77, 'C:\\xampp\\htdocs\\TestingPc\\backend\\payment/1689173645_64aebe8d866ce.png'),
(78, '64aed1f59c520_Screenshot 2023-05-16 233135.png'),
(79, '64aed3727b538_Screenshot 2023-05-16 233135.png'),
(80, '64aed3a27823b_Screenshot 2023-05-16 233135.png'),
(81, 'C:\\xampp\\htdocs\\TestingPc\\backend\\payment/1689179085_64aed3cdb0ae5.png'),
(82, 'C:\\xampp\\htdocs\\TestingPc\\backend\\payment/1689179102_64aed3de635e7.png'),
(83, '64aed3fb22900_Screenshot 2023-05-16 233135.png'),
(84, '64aed415711fd_Screenshot 2023-05-16 233135.png'),
(85, '64aed4d7801c8_Screenshot 2023-05-16 233135.png'),
(86, '64aed4fceef7f_Screenshot 2023-05-16 233135.png'),
(87, '64b1745d16b7f_Frame 1.png');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `ID` int(10) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `ContactNumber` int(10) NOT NULL,
  `Industry` varchar(50) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`ID`, `Username`, `Email`, `ContactNumber`, `Industry`, `Address`, `Password`) VALUES
(1, 'divesh', 'divesh@gmail.com', 765701658, 'mora', 'srilanka', 'divesh123'),
(8, 'b', 'b@gmail.com', 744444444, 'm', 'm', 'm'),
(9, 'test', 'test@gmail.com', 744444444, 'test', 'test', 'test'),
(10, 'test1', 'test2@gmail.com', 744444444, 'test', 'test', 'test'),
(11, 'test3', 'test3@gmail.com', 744444444, 'test', 'test', 'test'),
(12, 'test5', 'test4@gmail.com', 754444444, 'test1', 'test1', 'test1'),
(13, 'a', 'a@gmail.com', 1234567891, 'a', 'a', 'aa'),
(14, 'd', 'd@gmail.com', 2147483647, 'cc', 'cc', 'ccc'),
(15, 'd111', 'd11@gmail.com', 2147483647, 'cc', 'cc', 'ccc'),
(16, 'd1112', 'd111@gmail.com', 2147483647, 'cc', 'cc', 'ccc'),
(17, 'd11123', 'd1113@gmail.com', 2147483647, 'cc', 'cc', 'ccc'),
(18, 'amma', 'amma@gmail.com', 764564562, 'k', 'k', 'kk'),
(19, 'amma12', 'amma12@gmail.com', 764564562, 'k', 'k', 'kk'),
(20, 'amma123', 'amma123@gmail.com', 764564562, 'k', 'k', 'kk'),
(21, 'amma1234', 'amma1234@gmail.com', 764564562, 'k', 'k', 'kk'),
(22, 'amma12345', 'amma12345@gmail.com', 764564562, 'k', 'k', 'kk'),
(23, 'diveshkar', 'divesh.kar@gmail.com', 765701658, 'itum', 'trincomalee', 'divesh123'),
(24, 'chala', 'chala@gmail.com', 123456789, 'chala', 'chala', 'chala'),
(25, 'n', 'n@gmail.com', 456789123, 'n', 'n', 'n'),
(26, 's', 's@gmail.com', 789456123, 's', 's', 's'),
(27, 'e', 'e@gmail.com', 456782136, 'mora', 'moea', 'm'),
(28, 'v', 'v@gmail.com', 744444444, 'test', 's', '123'),
(29, 'div', 'div@gmail.com', 784561237, 'div', 'div', 'div'),
(30, '20IT0519', '20it0519@itum.mrt.ac.lk', 765701658, 'ITUM', 'Diyagama', 'Divesh@123'),
(31, 'nisara', 'nisara@gmail.com', 784561239, 'moratuwa', '789,tt,nnn', 'Nisara'),
(32, 'nasik', 'nasik@gmail.com', 758945678, 'itum', 'nasik', 'nasik123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderID`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`paymentID`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `paymentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
