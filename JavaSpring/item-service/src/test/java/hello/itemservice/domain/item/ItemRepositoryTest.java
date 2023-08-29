package hello.itemservice.domain.item;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;

public class ItemRepositoryTest {
    private ItemRepository itemRepository = new ItemRepository();

    @AfterEach
    void afterEach() {
        itemRepository.clearStore();
    }

    @Test
    void save() {
        //given itemA, 10000, 10
        Item item = new Item("item", 10000, 10);

        itemRepository.save(item);

        //when
        Item saveItem = itemRepository.save(item);

        //then 결과
        Item findItem = itemRepository.findById((item.getId()));
        Assertions.assertThat(findItem).isEqualTo(saveItem);
        //모든 조회 findAll()
        // 2개 입력, itemA, 10000, 10 / itemB, 20000, 20

        Item item1 = new Item("itemA", 10000, 10);
        Item item2 = new Item("itemB", 10000, 10);
        itemRepository.save(item1);
        itemRepository.save(item2);

        //when
        List<Item> result = itemRepository.findAll();
        //then 결과
        Assertions.assertThat(result.size()).isEqualTo(2);
        Assertions.assertThat(result).contains(item1, item2);
    }

    @Test
    void updateItem() {
        //given item1, 10000, 10
        Item item = new Item("item1", 10000, 10);
        Item savedItem = itemRepository.save(item);
        Long itemId = savedItem.getId();

        //when item2, 20000, 30
        Item updateParam = new Item("item2", 20000, 30);
        itemRepository.update(itemId, updateParam);
        Item findItem = itemRepository.findById(itemId);
        //then
        Assertions.assertThat(findItem.getItemName()).isEqualTo(updateParam.getItemName());

    }
}

