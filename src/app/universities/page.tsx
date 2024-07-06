"use client";
import { Card, Typography } from "@material-tailwind/react";
import { Quicksand } from "next/font/google";

import "@/app/globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const TABLE_HEAD_ASHUS = ["№", "Мэргэжлийн нэр", "ЭЕШалгалт1", "ЭЕШалгалт2"];

const TABLE_ROWS_ASHUS = [
  {
    name: "Хүний их эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Шүдний их эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Уламжлалт анагаахын эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эм зүйч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Нийгмийн эрүүл мэнд судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Био-Анагаах судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Био-Анагаах судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эрүүл мэндийн мэдээлэл зүйч ",
    lesson1: "Математик",
    lesson2: "Физик",
  },
  {
    name: "Эрүүл мэндийн нийгмийн ажилтан ",
    lesson1: "Биологи",
    lesson2: "Нийгмийн тухай мэдлэг",
  },
  {
    name: "Монгол анагаах ухааны засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Хөдөлгөөн засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Сувилахуй",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эх барихуй",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: " Ахуй засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
];
const TABLE_HEAD_MUBIS = ["№", "Мэргэжлийн нэр", "ЭЕШалгалт1", "ЭЕШалгалт2"];

const TABLE_ROWS_MUBIS = [
  {
    name: "Сургуулийн өмнөх насны боловсролын багш",
    lesson1: "Монгол хэл",
    lesson2: "",
  },
  {
    name: "Бага ангийн багш",
    lesson1: "монгол хэл 50%",
    lesson2: "математик 50%",
  },
  {
    name: "Математикийн багш",
    lesson1: "Математик",
    lesson2: "",
  },
  {
    name: "Мэдээлэл зүйн багш",
    lesson1: "Математик",
    lesson2: "",
  },
  {
    name: "Физикийн багш",
    lesson1: "Физик",
    lesson2: "",
  },
  {
    name: "Химийн багш",
    lesson1: "Хими",
    lesson2: "",
  },
  {
    name: "Биологийн багш",
    lesson1: "Биологи",
    lesson2: "",
  },
  {
    name: "Газар зүйн багш",
    lesson1: "Газар зүй",
    lesson2: "",
  },
  {
    name: "Нийгмийн ухааны багш",
    lesson1: "Нийгмийн тухай мэдлэг",
    lesson2: "",
  },
  {
    name: "Түүхийн багш",
    lesson1: "Монголын түүх",
    lesson2: "",
  },
  {
    name: "Дүрслэх урлагийн багш Хөгжмийн багш",
    lesson1: "ур чадвар 70%",
    lesson2: "Монгол хэл Математик Нийгмийн тухай мэдлэг30%",
  },
  {
    name: "Зураг зүй дизайны багш",
    lesson1: "Монгол хэл Математик Физик 30%",
    lesson2: "",
  },
  {
    name: "Дизайн технологийн багш",
    lesson1: "Математик Физик 30%",
    lesson2: "",
  },
  {
    name: " Монгол хэл-Уран зохиолын багш",
    lesson1: "Монгол хэл",
    lesson2: "",
  },
];

const TABLE_HEAD_MUIS = [
  "№",
  "Мэргэжлийн нэр",
  "Суурь шалгалт 60%",
  "Дагалдах шалгалт 40%",
  "МУИС-ийн бүрэлдэхүүн сургууль",
];

const TABLE_ROWS_MUIS = [
  {
    name: "Багш, математикийн боловсрол",
    lesson1: "Биологи,Газарзүй,Физик,Хими",
    lesson2:
      "Англи хэл,Биологи,Газарзүй,Математик,Монгол хэл,Монголын түүх,Нийгмийн тухаймэдлэг,,Физик,Хими",
    school: "Шинжлэх ухааны сургуулийн байгалийн ухааны салбар",
  },
  {
    name: "Багш, байгалийн ухааны боловсрол",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Байгаль орчныг зайнаас тандан судлал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Биологи",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Биологийн нөөц судлал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Биохими",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Биотехнологи",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Газар зүй",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Газар зохион байгуулалт",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Геологи",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Геофизик",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Математик",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Физик",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Хими",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Хот ба бүс нутгийн төлөвлөл",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Экологи",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Антропологи",
    lesson1: "Математик,Монгол түүх,Нийгмийн тухай ,мэдлэг",
    lesson2:
      "Англи хэл,Биологи,Газарзүй,Математик,Монгол хэл,Монголын түүх,Орос хэл,Физик,Хими",
    school: "Шинжлэх ухааны сургуулийн нийгмийн ухааны салбар",
  },
  {
    name: " Археологи",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Нийгмийн ажил",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Социологи",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Сэтгүүлзүй",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Сэтгэл судлал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Улс төр судлал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Эдийн засаг",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Багш, гадаад хэлний боловсрол",
    lesson1:
      "Англи хэл,Монгол хэл,Монголын түүх,Нийгмийн тухай мэдлэг,Орос хэл",
    lesson2:
      "Англи хэл,Биологи,Газарзүй,Математик,Монгол хэл,Монголын түүх,Орос хэл,Физик,Хими",
    school: "Шинжлэх ухааны сургуулийн хүмүүнлэгийн ухааны салбар",
  },
  {
    name: " Багш, монгол хэл-уран зохиолын боловсрол",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "  Багш, нийгмийн ухааны боловсрол",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Гадаад хэлний орчуулга",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Олон улс, орон судлал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Түүх",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Урлаг судлал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Утга зохиол судлал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Философи",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Хэл, уран зохиол /Монгол хэл, уран зохиол, Гадаад хэл, уран зохиол/",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Хэлшинжлэл /Монгол хэл шинжлэл, Гадаад хэл шинжлэл/",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Шашин судлал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Байгаль орчныг хамгаалах технологи",
    lesson1: "Биологи Математик Физик Хими",
    lesson2: "Биологи Газарзүй Математик Монгол хэл Физик Хими",
    school: "Хэрэглээний шинжлэх ухаан, инженерчлэлийн сургууль",
  },
  {
    name: " Био-инженерчлэл",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Компьютерийн сүлжээ",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: " Компьютерийн ухаан",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Материал судлал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Мэдээллийн систем",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Мэдээллийн технологи",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Нано шинжлэх ухаан, инженерчлэл",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Ойн үйлдвэрлэлийн техник, технологи",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Программ хангамж",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Статистик",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Сэргээгдэх эрчим хүч",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Ус судлал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Химийн инженерчлэл",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Холбооны технологи",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Хүрээлэн буй орчин судлал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Хэрэглээний математик",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Хэрэглээний хими Цаг уур",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Цөмийн инженерчлэл",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Электрон системийн автоматжуулалт",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Аялал жуулчлалын менежемент",
    lesson1: "Математик 80%",
    lesson2: "Англи хэл Нийгмийн тухай мэдлэг Орос хэл 20%",
    school: "Бизнесийн сургууль",
  },
  {
    name: "Бизнесийн удирдлага",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Даатгал",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Зочлох үйлчилгээ, Маркетинг",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Менежмент",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Нягтлан бодох бүртгэл",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Санхүү, банк",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Эрх зүй",
    lesson1: "Нийгмийн тухай мэдлэг",
    lesson2: "Математик",
    school: "Хууль зүйн сургууль",
  },
  {
    name: "Нийтийн удирдлага",
    lesson1:
      "Англи хэл Математик Монгол хэл Монголын түүх Нийгмийн тухай мэдлэг Орос хэл",
    lesson2:
      "Англи хэл Математик Монгол хэл Монголын түүх Нийгмийн тухай мэдлэг Орос хэл",
    school: "Олон улсын харилцаа, нийтийн удирдлагын сургууль ",
  },
  {
    name: "Олон улсын харилцаа",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Багш, гадаад хэлний боловсрол",
    lesson1: "Англи хэл Орос хэл",
    lesson2: "Нийгмийн тухай мэдлэг",
    school: "Орхон сургууль",
  },
  {
    name: "Гадаад хэлний орчуулга",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Багш, монгол хэл-уран зохиолын боловсрол",
    lesson1: "Монгол хэл",
    lesson2: "Нийгмийн тухай мэдлэг",
    school: "Орхон сургууль",
  },
  {
    name: "Даатгал",
    lesson1: "Математик",
    lesson2: "Англи хэл Нийгмийн тухай мэдлэг",
    school: "Орхон сургууль",
  },
  {
    name: "Маркетинг",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Менежмент",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Нягтлан бодох бүртгэл",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Санхүү, банк",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Нягтлан бодох бүртгэл",
    lesson1: "Математик",
    lesson2: "Англи хэл",
    school: "Завхан сургууль",
  },
  {
    name: "Санхүү, банк",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Маркетинг",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Менежмент",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Худалдаа",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Бичиг хэрэг, оффисийн ажилтан",
    lesson1: "",
    lesson2: "",
    school: "",
  },
  {
    name: "Электрон системийн автоматжуулалт",
    lesson1: "Математик Физик",
    lesson2: "Биологи Математик Физик Хими",
    school: "",
  },
  {
    name: "Багш, гадаад хэлний боловсрол",
    lesson1: "Англи хэл Орос хэл",
    lesson2: "Англи хэл Математик Монгол хэл Орос хэл",
    school: "",
  },
];

const TABLE_HEAD_SUIS = [
  "№",
  "Мэргэжлийн нэр",
  "Ур чадварын шалгалт ",
  "СУИС-ийн бүрэлдэхүүн сургууль",
];

const TABLE_ROWS_SUIS = [
  {
    name: "Багш, урлагийн боловсрол /бүжгийн багш/",
    lesson1:
      "а) Бие бялдрын хөгжил, уян хатан чанар б) Сонсгол, ой тогтоолт, хөгжмийн мэдрэмж в) Бүжиглэх вьяас чадварг) Үсрэлт, хөдөлгөөний эвсэл",
    school: "Бүжгийн урлагийн сургууль,",
  },
  {
    name: "Бүжгийн урлаг/бүжиглэх урлаг,бүжгийн найруулга/",
    lesson1: "",
    school: "Бүжгийн урлагийн сургууль",
  },
  {
    name: "Хувцасны дизайн",
    lesson1: "а) Зохиомж б) Хар зура в) Уран зураг г) Бие дааж хийсэн ажлууд",
    school: "Дүрслэх, дизайн урлагийн сургууль",
  },
  {
    name: "График дизайн/компьютер график, хэвлэлийн дизайн/",
    lesson1: "",
    school: "",
  },
  {
    name: "Уран зураг/уран зураг, монгол зураг, монументаль уран зураг/",
    lesson1: "",
    school: "",
  },
  {
    name: "Уран баримал/уран баримал, керамик урлаг, арьсан урлаг, чимэглэх урлаг, уран дархан, уран сийлбэр/",
    lesson1: "",
    school: "",
  },
  {
    name: "Зураасан зураг",
    lesson1: "",
    school: "",
  },
  {
    name: "Түүх соёлын дурсгалт зүйлийн сэргээн засварлалт",
    lesson1: "",
    school: "",
  },
  {
    name: "Зураг авалт",
    lesson1: "а) Ярилцлага б) Оюуны чадамж IQ в) Бие дааж хийсэн ажлууд",
    school: "Радио телевиз, медиа урлагийн сургууль",
  },
  {
    name: "Дуу чимээний технологи",
    lesson1: "а) Сонсгол б) Ярилцлага в) Оюуны чадамж IQ",
    school: "Радио телевиз, медиа урлагийн сургууль",
  },
  {
    name: "Радио, дэлгэцийн техник технологи",
    lesson1: "а) Ярилцлага в) Оюуны чадамж IQ",
    school: "Радио телевиз, медиа урлагийн сургууль",
  },
  {
    name: "График дизайн /медиа анимейшн",
    lesson1: "а) Ярилцлага в) Оюуны чадамж IQ",
    school: "Радио телевиз, медиа урлагийн сургууль",
  },
  {
    name: "Найруулах урлаг/ киноны, радио, телевизийн",
    lesson1:
      "а) Өөрийн судалбар б) Хөдөлгөөний эвсэл, бүжиг в) Дуулах чадвар г) Сонсгол, ритмд) Уран уншлага",
    school: "Радио телевиз, медиа урлагийн сургууль",
  },
  {
    name: "Сэтгүүл зүй",
    lesson1: "а) Ярилцлага б) Эссэ бичих в) Оюуны чадамж IQ",
    school: "Радио телевиз, медиа урлагийн сургууль",
  },
  {
    name: "Соёл судлал /нүүдлийн соёл судлал, өрнийн соёл судлал, соёлын өв, музей судлал/",
    lesson1:
      "а) Өөрийн судалбар б) Хөдөлгөөний эвсэл, бүжиг в) Дуулах чадвар г) Сонсгол, ритмд) Уран уншлага",
    school: "Соёлын сургууль",
  },
  {
    name: "Номын сан судлал",
    lesson1:
      "а) Өөрийн судалбар б) Хөдөлгөөний эвсэл, бүжиг в) Дуулах чадвар г) Сонсгол, ритмд) Уран уншлага",
    school: "Соёлын сургууль",
  },
  {
    name: "Менежмент /соёл, урлаг/",
    lesson1:
      "а) Өөрийн судалбар б) Хөдөлгөөний эвсэл, бүжиг в) Дуулах чадвар г) Сонсгол, ритмд) Уран уншлага",
    school: "Соёлын сургууль",
  },
  {
    name: "Маркетинг /соёл, урлаг/",
    lesson1:
      "а) Өөрийн судалбар б) Хөдөлгөөний эвсэл, бүжиг в) Дуулах чадвар г) Сонсгол, ритмд) Уран уншлага",
    school: "Соёлын сургууль",
  },
  {
    name: "Аялал жуулчлал/соёлын аялал жуулчлал, соёл чөлөөт цагийн үйлчилгээ/",
    lesson1:
      "а) Өөрийн судалбар б) Хөдөлгөөний эвсэл, бүжиг в) Дуулах чадвар г) Сонсгол, ритмд) Уран уншлага",
    school: "Соёлын сургууль",
  },
  {
    name: "Жүжиглэх урлаг",
    lesson1:
      "а) Өөрийн судалбар б) Хөдөлгөөний эвсэл, бүжиг в) Дуулах чадвар г) Сонсгол, ритмд) Уран уншлага",
    school: "Театрын урлагийн сургууль",
  },
  {
    name: "Найруулах урлаг /жүжгийн/",
    lesson1:
      "а) Өөрийн судалбар б) Хөдөлгөөний эвсэл, бүжиг в) Дуулах чадвар г) Сонсгол, ритм д) Уран уншлага",
    school: "",
  },
  {
    name: "Урлаг судлал /театр, кино, дүрслэх урлаг/",
    lesson1: " а) Эссэ бичих а) Ярилцлага б) Оюуны чадамж IQ",
    school: "",
  },
  {
    name: "Тайзны техник, технологи",
    lesson1: "а) Ярилцлага б) Хар зураг в) Оюуны чадамж IQ",
    school: "",
  },
  {
    name: "Уран зураг/ тайз дэлгэцийн/",
    lesson1: "а) Зохиомж б) Хар зураг в) Уран зураг г) Бие дааж хийсэн ажлууд",
    school: "",
  },
  {
    name: "Багш, урлагийн боловсрол/хөгжмийн багш/",
    lesson1:
      "а) Хөгжимдөх чадвар (төгөлдөр хуураар 2 зохиол) б) Хэмнэлв) Сонсгол, ой тогтоолт а) Сонгосон хөгжмийн зэмсгээр 2 зохиол хөгжимдөх б) Урлагийн тухай ярилцлага в) Биеийн хөгжил г) Дуулах чадвар",
    school: "Хөгжмийн урлагийн сургууль",
  },
  {
    name: "Хөгжмийн урлаг/зохиомж, MIDI зохиомж, хөгжим судлал, удирдах-найрал дуу, найрал хөгжим/",
    lesson1:
      "а) Соноршуулга: 2-3 хоолойндиктант а) Өөрийн зохиосон хөгжмийн зохиолыг хөгжимдөх, ноотны программын мэдлэг б) Найрал хөгжим удирдах- 2 бүтээлв) Найрал дуу удирдах-2 бүтээл, дуулах чадварг) Урлагийн тухай эссэ бичих (250-300 үгтэй) б) Хөгжмийн суурь мэдлэг (бодлогободох, онолын дасгал хийх) в) Төгөлдөр хуураар хөгжимдөх ур чадвар г) Ярилцлага",
    school: "",
  },
  {
    name: "Хөгжимдөх урлаг/сонгодог хөгжим, үндэсний хөгжим, орчин цагийн хөгжим,концертмейстр/",
    lesson1:
      "а) Хөгжимдөх чадвара) Сонгосон хөгжмийн зэмсгээр 2 зохиол хөгжимдөх б) Урлагийн тухай ярилцлага в) Биеийн хөгжилг) Дуулах чадвар(сонгосон хөгжмийн зэмсэгээр 2 зохиол)б) Хэмнэл в) Сонсгол, ой тогтоолт",
    school: "",
  },
  {
    name: "Дуулах урлаг/дуурийн, уртын, богинын, орчин цагийн/",
    lesson1:
      "а) Дуулах чадвар (2-3 дуу бэлтгэх) б) Хэмнэл в) Сонсгол, ой тогтоолт г) Хөгжимдөх чадвар",
    school: "",
  },
  {
    name: "Үндэсний язгуур урлаг /хөөмэй, тууль/",
    lesson1:
      "а) Дуулах чадвар (2-3 дуу бэлтгэх) б) Хэмнэл в) Сонсгол, ой тогтоолтг) Хөгжимдөх чадвар",
    school: "",
  },
];
const TABLE_HEAD_SEZIS = ["№", "Мэргэжлийн нэр", "ЭЕШалгалт1", "ЭЕШалгалт2"];

const TABLE_ROWS_SEZIS = [
  {
    name: "Нягтлан бодох бүртгэл",
    lesson1: "Математик",
    lesson2: "Англи хэл",
  },
  {
    name: "Санхүү",
    lesson1: "Математик",
    lesson2: "Англи хэл",
  },
  {
    name: "Банк",
    lesson1: "Математик",
    lesson2: "Англи хэл",
  },
  {
    name: "Бизнесийн удирдлага",
    lesson1: "Математик",
    lesson2: "Англи хэл",
  },
  {
    name: "Маркетинг ",
    lesson1: "Математик",
    lesson2: "Англи хэл",
  },
  {
    name: "Аялал, жуулчлал",
    lesson1: "Математик",
    lesson2: "Англи хэл",
  },
  {
    name: "Зочлох үйлчилгээ",
    lesson1: "Математик",
    lesson2: "Англи хэл",
  },
  {
    name: "Мэдээллийн систем",
    lesson1: "Математик",
    lesson2: "Англи хэл",
  },
  {
    name: "Эдийн засаг",
    lesson1: "Математик",
    lesson2: "Англи хэл",
  },
  {
    name: "Эрх зүй",
    lesson1: "Математик",
    lesson2: "Нийгмийн тухай мэдлэ",
  },
];
const TABLE_HEAD_HAIS = ["№", "Мэргэжлийн нэр", "ЭЕШалгалт өгөх хичээл"];

const TABLE_ROWS_HAIS = [
  {
    name: "Хөдөө аж ахуйн бизнесийн эдийн засаг",
    lesson1: "Математик",
  },
  {
    name: "Эдийн засаг математик загварчлал",
    lesson1: "Математик",
  },
  ,
  {
    name: "Хөдөө аж ахуйн эдийн засаг, статистик",
    lesson1: "Математик",
  },
  ,
  {
    name: "Менежмент, үйлдвэрлэлийн /хөдөө аж ахуйн/",
    lesson1: "Математик",
  },
  ,
  {
    name: "Хөдөө аж ахуйн маркетинг менежмент",
    lesson1: "Математик",
  },
  ,
  {
    name: "Банк, санхүү",
    lesson1: "Математик",
  },
  ,
  {
    name: "Биологи - Агнуур зүйч",
    lesson1: "Хими Биологи Математик",
  },
  ,
  {
    name: "Экологи, байгаль хамгаалал",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Математик программ хангамж",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Мэдээллийн систем /Хөдөө аж ахуйн/",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Хөдөө аж ахуйн бүтээгдэхүүний хими технологи ",
    lesson1: "Математик Хими Биологи",
  },
  ,
  {
    name: "Байгаль орчны, хяналт үнэлгээ",
    lesson1: "Математик Хими Биологи",
  },
  ,
  {
    name: "Байгаль орчны нөхөн сэргээлт",
    lesson1: "Математик Хими Биологи",
  },
  ,
  {
    name: "Ургамлын нөөц био үйлдвэрлэл",
    lesson1: "Математик Хими Биологи",
  },
  ,
  {
    name: "Хөдөө аж ахуйн цахилгаан хангамж",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Инженер механик",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Хөдөө аж ахуйн машин механизмын ашиглалт",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Зохион бүтээх инженер",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Металл судлал, технологи",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Гидромеханик инженер",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Үндэсний үйлдвэрлэлийн технологи",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Хөдөө аж ахуйн барилга байгууламжийн инженер",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Хүнсний инженерчлэл",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Барилгын инженер",
    lesson1: "Математик Физик",
  },
  ,
  {
    name: "Бараа түүхий эдийн технологи",
    lesson1: "Хими Биологи Математик",
  },
  ,
  {
    name: "Таваар судлал",
    lesson1: "Хими Биологи Математик",
  },
  ,
  {
    name: "Мах сүүний үйлдвэрлэлийн технологи",
    lesson1: "Хими Биологи Математик",
  },
  ,
  {
    name: "Хөдөө аж ахуйн бүтээгдэхүүний чанар, эрүүл ахуйн үнэлгээ",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Газар зохион байгуулалт",
    lesson1: "Математик",
  },
  {
    name: "Газрын үнэлгээ",
    lesson1: "Математик",
  },
  {
    name: "Газрын кадастр, зураглал",
    lesson1: "Математик Хар зураг",
  },
  {
    name: "Хөдөө аж ахуйн биотехнологи",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Агрономи",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Усалгаатай газар тариалангийн агрономи",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: " Жимс ногооны аж ахуйн агрономи",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Селекци, үрийн аж ахуйн агрономи",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Ногоон байгууламжийн агрономи",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Ургамал хамгаалал, хорио цээрийн үнэлгээ",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Хөрс судлал, агрохими",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Газар тариалангаар мэргэшсэн фермерийн аж ахуй",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Зоо инженер",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Бэлчээр, тэжээлийн технологи",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Мал аж ахуйгаар мэргэшсэн фермерийн аж ахуй",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Ойн аж ахуйн инженер",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Загасны аж ахуйн технологи",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Малын их эмч",
    lesson1: "Хими Биологи Математик",
  },
  {
    name: "Байгалийн аялал жуулчлал",
    lesson1: "Хими Биологи Математик",
  },
];
const TABLE_HEAD_HSIS = ["№", "Мэргэжлийн нэр", "ЭЕШалгалт1", "ЭЕШалгалт2"];

const TABLE_ROWS_HSIS = [
  {
    name: "Хүний их эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Шүдний их эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Уламжлалт анагаахын эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эм зүйч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Нийгмийн эрүүл мэнд судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Био-Анагаах судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Био-Анагаах судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эрүүл мэндийн мэдээлэл зүйч ",
    lesson1: "Математик",
    lesson2: "Физик",
  },
  {
    name: "Эрүүл мэндийн нийгмийн ажилтан ",
    lesson1: "Биологи",
    lesson2: "Нийгмийн тухай мэдлэг",
  },
  {
    name: "Монгол анагаах ухааны засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Хөдөлгөөн засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Сувилахуй",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эх барихуй",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: " Ахуй засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
];
const TABLE_HEAD_SHUTIS = ["№", "Мэргэжлийн нэр", "ЭЕШалгалт1", "ЭЕШалгалт2"];

const TABLE_ROWS_SHUTIS = [
  {
    name: "Хүний их эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Шүдний их эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Уламжлалт анагаахын эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эм зүйч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Нийгмийн эрүүл мэнд судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Био-Анагаах судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Био-Анагаах судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эрүүл мэндийн мэдээлэл зүйч ",
    lesson1: "Математик",
    lesson2: "Физик",
  },
  {
    name: "Эрүүл мэндийн нийгмийн ажилтан ",
    lesson1: "Биологи",
    lesson2: "Нийгмийн тухай мэдлэг",
  },
  {
    name: "Монгол анагаах ухааны засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Хөдөлгөөн засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Сувилахуй",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эх барихуй",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: " Ахуй засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
];

export default function TableWithStripedRows() {
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}
    >
      <div className="w-full bg-white mb-6 shadow-lg rounded">
        <div className="w-full p-4">
          <h3>
            <p className="font-bold">
              АШУҮИС-Анагаахын шинжлэх ухааны үндэсний их сургууль
            </p>
            <p className="text-gray-500">
              ЭЕШ-ын хоёр хичээлийн оноог хооронд нь нэмэж, шалгуулагчдыг
              жагсаалтанд эрэмбэлнэ.
            </p>
          </h3>
        </div>
        <div className="max-w-full">
          <table className="w-full table-fixed border-collapse">
            <thead className="text-left">
              <tr className="[&>*]:px-6 [&>*]:bg-gray-100 [&>*]:text-gray-500 [&>*]:border [&>*]:border-solid [&>*]:border-gray-200 [&>*]:py-3 [&>*]:text-xs [&>*]:uppercase [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:whitespace-no-wrap [&>*]:font-semibold [&>*]:text-center">
                {TABLE_HEAD_ASHUS.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="align-top break-words">
              {TABLE_ROWS_ASHUS.map(({ name, lesson1, lesson2 }, index) => (
                <tr
                  key={name}
                  className="hover:bg-gray-200 [&>*]:border-t-0 [&>*]:px-6 [&>*]:align-middle [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:text-xs [&>*]:whitespace-no-wrap [&>*]:p-4"
                >
                  <td className="text-left ">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {lesson1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {lesson2}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full bg-white mb-6 shadow-lg rounded">
        <div className="w-full p-4">
          <h3>
            <p className="font-bold">МУБИС-Монгол улсын багшийн их сургууль</p>
            <p className="text-gray-500">/Эх сурвалж: YOLO.MN 2016-11-04</p>
          </h3>
        </div>
        <div className="max-w-full">
          <table className="w-full table-fixed border-collapse">
            <thead className="text-left">
              <tr className="[&>*]:px-6 [&>*]:bg-gray-100 [&>*]:text-gray-500 [&>*]:border [&>*]:border-solid [&>*]:border-gray-200 [&>*]:py-3 [&>*]:text-xs [&>*]:uppercase [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:whitespace-no-wrap [&>*]:font-semibold [&>*]:text-center">
                {TABLE_HEAD_MUBIS.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="align-top break-words">
              {TABLE_ROWS_MUBIS.map(({ name, lesson1, lesson2 }, index) => (
                <tr
                  key={name}
                  className="hover:bg-gray-200 [&>*]:border-t-0 [&>*]:px-6 [&>*]:align-middle [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:text-xs [&>*]:whitespace-no-wrap [&>*]:p-4"
                >
                  <td className="text-left ">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {lesson1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {lesson2}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full bg-white mb-6 shadow-lg rounded">
        <div className="w-full p-4">
          <h3>
            <p className="font-bold">МУИС-Монгол улсын их сургууль</p>
            <p className="text-gray-500">
              ШААРДЛАГА: Суурь шалгалтанд тооцохоор заасан хичээлээс хамгийн
              өндөр оноо авсан шалгалтын оноог 0.6, дагалдах шалгалтад тооцохоор
              заасан хичээлээс хамгийн өндөр оноо авсан хичээлийг 0.4-өөр
              үржүүлж нэмнэ. Суурь шалгалтад тооцуулсан хичээлийн оноог дагалдах
              шалгалтад тооцуулахгүй.
            </p>
          </h3>
        </div>
        <div className="max-w-full">
          <table className="w-full table-fixed border-collapse">
            <thead className="text-left">
              <tr className="[&>*]:px-6 [&>*]:bg-gray-100 [&>*]:text-gray-500 [&>*]:border [&>*]:border-solid [&>*]:border-gray-200 [&>*]:py-3 [&>*]:text-xs [&>*]:uppercase [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:whitespace-no-wrap [&>*]:font-semibold [&>*]:text-center">
                {TABLE_HEAD_MUIS.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="align-top break-words">
              {TABLE_ROWS_MUIS.map(
                ({ name, lesson1, lesson2, school }, index) => (
                  <tr
                    key={name}
                    className="hover:bg-gray-200 [&>*]:border-t-0 [&>*]:px-2 [&>*]:align-middle [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:text-xs [&>*]:whitespace-no-wrap [&>*]:p-4"
                  >
                    <td className="text-left ">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className="p-4 text-center">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className="p-4 text-center">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {lesson1}
                      </Typography>
                    </td>
                    <td className="p-4 text-center">
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {lesson2}
                      </Typography>
                    </td>
                    <td className="p-4 text-center">
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {school}
                      </Typography>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full bg-white mb-6 shadow-lg rounded">
        <div className="w-full p-4">
          <h3>
            <p className="font-bold">СУИС-Соёл урлагийн их сургууль</p>
            <p className="text-gray-500">
              ШААРДЛАГА: СУИС-ийн нэг онцлог бол сургалт явуулж буй бакалаврын
              хөтөлбөрийн дийлэх хувь ньурлагийн авъяас шаардсан хөтөлбөр
              байдаг. Иймээс СУИС-д элсэхийг хүсэгч нь элсэлтийн ерөнхий
              шалгалтаас гадна ур чадварын шалгалт өгдөг. ЭЕШ-ын хүчин төгөлдөр
              оноотой, энэхүү оноо нь элсэхийг хүссэн хөтөлбөрийн босго оноог
              хангасан байна.
            </p>
          </h3>
        </div>
        <div className="max-w-full">
          <table className="w-full table-fixed border-collapse">
            <thead className="text-left">
              <tr className="[&>*]:px-6 [&>*]:bg-gray-100 [&>*]:text-gray-500 [&>*]:border [&>*]:border-solid [&>*]:border-gray-200 [&>*]:py-3 [&>*]:text-xs [&>*]:uppercase [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:whitespace-no-wrap [&>*]:font-semibold [&>*]:text-center">
                {TABLE_HEAD_SUIS.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="align-top break-words">
              {TABLE_ROWS_SUIS.map(({ name, lesson1, school }, index) => (
                <tr
                  key={name}
                  className="hover:bg-gray-200 [&>*]:border-t-0 [&>*]:px-2 [&>*]:align-middle [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:text-xs [&>*]:whitespace-no-wrap [&>*]:p-4"
                >
                  <td className="text-left ">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {lesson1}
                    </Typography>
                  </td>

                  <td className="p-4 text-center">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {school}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full bg-white mb-6 shadow-lg rounded">
        <div className="w-full p-4">
          <h3>
            <p className="font-bold">СЭЗИС-Санхүү, эдийн засгийн их сургууль</p>
            <p className="text-gray-500">/Эх сурвалж: YOLO.MN 2016-11-04/</p>
          </h3>
        </div>
        <div className="max-w-full">
          <table className="w-full table-fixed border-collapse">
            <thead className="text-left">
              <tr className="[&>*]:px-6 [&>*]:bg-gray-100 [&>*]:text-gray-500 [&>*]:border [&>*]:border-solid [&>*]:border-gray-200 [&>*]:py-3 [&>*]:text-xs [&>*]:uppercase [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:whitespace-no-wrap [&>*]:font-semibold [&>*]:text-center">
                {TABLE_HEAD_SEZIS.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="align-top break-words">
              {TABLE_ROWS_SEZIS.map(({ name, lesson1, lesson2 }, index) => (
                <tr
                  key={name}
                  className="hover:bg-gray-200 [&>*]:border-t-0 [&>*]:px-6 [&>*]:align-middle [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:text-xs [&>*]:whitespace-no-wrap [&>*]:p-4"
                >
                  <td className="text-left ">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {lesson1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {lesson2}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="w-full bg-white mb-6 shadow-lg rounded">
        <div className="w-full p-4">
          <h3>
            <p className="font-bold">ХААИС-Хөдөө аж ахуйн их сургууль</p>
            <p className="text-gray-500">
              ШААРДЛАГА: Элсэгч нь тухайн мэргэжлийн чиглэлд харгалзах ерөнхий
              шалгалтын аль нэгийг өгсөн байна.
            </p>
          </h3>
        </div>
        <div className="max-w-full">
          <table className="w-full table-fixed border-collapse">
            <thead className="text-left">
              <tr className="[&>*]:px-6 [&>*]:bg-gray-100 [&>*]:text-gray-500 [&>*]:border [&>*]:border-solid [&>*]:border-gray-200 [&>*]:py-3 [&>*]:text-xs [&>*]:uppercase [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:whitespace-no-wrap [&>*]:font-semibold [&>*]:text-center">
                {TABLE_HEAD_HAIS.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="align-top break-words">
              {TABLE_ROWS_HAIS.map(({ name, lesson1 }, index) => (
                <tr
                  key={name}
                  className="hover:bg-gray-200 [&>*]:border-t-0 [&>*]:px-6 [&>*]:align-middle [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:text-xs [&>*]:whitespace-no-wrap [&>*]:p-4"
                >
                  <td className="text-left ">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {lesson1}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </main>
  );
}
