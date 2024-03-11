package com.wangpeng.bms;

import com.wangpeng.bms.mapper.BookInfoMapper;
import com.wangpeng.bms.mapper.UserMapper;
import com.wangpeng.bms.model.BookInfo;
import com.wangpeng.bms.model.User;
import org.apache.ibatis.session.SqlSession;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.math.BigDecimal;

@SpringBootTest
public class booktest {

    @Autowired
    private BookInfoMapper bookInfoMapper;

    @Test
    public void testInsert() {
        // 创建 BookInfo 对象，设置书籍信息
        BookInfo bookInfo = new BookInfo();
//        bookInfo.setBookid(40);
        bookInfo.setBookname("Java Programming");
        bookInfo.setBookauthor("John Smith");
        bookInfo.setBookprice(BigDecimal.valueOf(29.99));
        bookInfo.setBooktypeid(1);
        bookInfo.setBookdesc("Introduction to Java programming");
        bookInfo.setIsborrowed((byte) 0);
        bookInfo.setBookimg("book_image.jpg");

        // 调用接口方法执行插入
        int rowsAffected = bookInfoMapper.insert(bookInfo);

        // 输出受影响的行数
        System.out.println("Rows affected: " + rowsAffected);
//        }
    }
    @Test
    public void testselect() {
        // 创建 BookInfo 对象，设置书籍信息
        BookInfo bookInfo = new BookInfo();
        bookInfo.setBookid(71);
//        bookInfo.setBookname("Java Programming");
//        bookInfo.setBookauthor("John Smith");
//        bookInfo.setBookprice(BigDecimal.valueOf(29.99));
//        bookInfo.setBooktypeid(1);
//        bookInfo.setBookdesc("Introduction to Java programming");
//        bookInfo.setIsborrowed((byte) 0);
//        bookInfo.setBookimg("book_image.jpg");

        // 调用接口方法执行插入
        BookInfo b2 =  bookInfoMapper.selectByPrimaryKey(50);

        System.out.println(b2.getBookname());
        // 输出受影响的行数
//        System.out.println("Rows affected: " + rowsAffected);
//        }

    }
//    @Test
//    public void testUpdate() {
//        // 创建 BookInfo 对象，设置书籍信息
//        BookInfo bookInfo = new BookInfo();
////        bookInfo.setBookid(40);
//        bookInfo.setBookname("Java Programming");
//        bookInfo.setBookauthor("John Smith");
//        bookInfo.setBookprice(BigDecimal.valueOf(29.99));
//        bookInfo.setBooktypeid(1);
//        bookInfo.setBookdesc("Introduction to Java programming");
//        bookInfo.setIsborrowed((byte) 0);
//        bookInfo.setBookimg("book_image.jpg");
//
//        // 调用接口方法执行插入
//        int rowsAffected = bookInfoMapper.updateByPrimaryKey(71);
//
//        // 输出受影响的行数
//        System.out.println("Rows affected: " + rowsAffected);
////        }
//    }
    @Test
    public void testDelete() {
        // 创建 BookInfo 对象，设置书籍信息
//        BookInfo bookInfo = new BookInfo();
////        bookInfo.setBookid(40);
//        bookInfo.setBookname("Java Programming");
//        bookInfo.setBookauthor("John Smith");
//        bookInfo.setBookprice(BigDecimal.valueOf(29.99));
//        bookInfo.setBooktypeid(1);
//        bookInfo.setBookdesc("Introduction to Java programming");
//        bookInfo.setIsborrowed((byte) 0);
//        bookInfo.setBookimg("book_image.jpg");

        // 调用接口方法执行插入
//        int rowsAffected = bookInfoMapper.updateByPrimaryKey(71);
        bookInfoMapper.deleteByPrimaryKey(71);
        // 输出受影响的行数
//        System.out.println("Rows affected: " + rowsAffected);
//        }
    }

}
