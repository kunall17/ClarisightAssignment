import java.util.ArrayList;

/**
 * Created by kunall17 on 19/09/18.
 */
public class ClarisightAss {

    public static int findduplicate(ArrayList<NodeList> list, int n) {
        int ans = 0;
        for (NodeList i : list)
            i.next.val = i.next.val + n;
        for (NodeList i : list) {
            int p = i.val;
            while (p > 0)
                p = p - n;
            p = p + n;
            i.val = p;
            p = i.next.val;
            p = p - 2 * n;
            if (p > 0) {
                ans = i.val;
                break;
            }
        }
        return ans;
    }


    public static void main(String[] args) {
        NodeList a = new NodeList(2);
        NodeList b = new NodeList(3);
        NodeList c = new NodeList(1);
        NodeList d = new NodeList(3);
        a.next = b;
        b.next = c;
        c.next = a;
        d.next = c;

        ArrayList<NodeList> nodeLists = new ArrayList<>();
        nodeLists.add(a);
        nodeLists.add(b);
        nodeLists.add(c);
        nodeLists.add(d);

        System.out.println(findduplicate(nodeLists, 3));
    }

}

class NodeList {
    int val;
    NodeList next;

    public NodeList(int val) {
        this.val = val;
        next = null;
    }
}