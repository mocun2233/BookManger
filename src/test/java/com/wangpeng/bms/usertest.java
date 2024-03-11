package com.wangpeng.bms;

import com.wangpeng.bms.mapper.UserMapper;
import com.wangpeng.bms.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class usertest {
    @Autowired
    private UserMapper userMapper;

    /**
     * 新增用户
     */
    @Test
    public void testInsert(){
        // 创建 User 对象，设置用户信息
        User user = new User();
//        user.setUserid(17);
        user.setUsername("shiyaun");
        user.setUserpassword("123456");
        user.setIsadmin((byte) 0);

        // 调用接口方法执行插入
        int rowsAffected = userMapper.insert(user);

        // 输出受影响的行数
        System.out.println("Rows affected: " + rowsAffected);


    }

    /**
     * 查询用户
     */
    @Test
    public void testselect(){
        // 创建 User 对象，设置用户信息
        User user = userMapper.selectByPrimaryKey(17);


        System.out.println("User ID "+ user.getUsername());
        // 输出受影响的行数



    }
    /**
     * 修改用户
     */
    @Test
    public void testupdate(){
        // 创建 User 对象，设置用户信息
        User user = new User();
        user.setUserid(17);
        user.setUsername("世源");
        user.setUserpassword("123456");
        user.setIsadmin((byte) 0);

        // 调用接口方法执行插入
        int rowsAffected = userMapper.updateByPrimaryKey(user);

        // 输出受影响的行数
        System.out.println("Rows affected: " + rowsAffected);


    }

    /**
     * 删除用户
     */
    @Test
    public void testDelete(){

        userMapper.deleteByPrimaryKey(17);
    }


}
